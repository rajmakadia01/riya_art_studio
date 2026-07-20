import { getStore } from '@netlify/blobs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';

const categories = ['Texture Art', 'Acrylic Pouring', 'Canvas Painting', 'Resin Art', 'Fabric Painting', 'Charcoal Painting'];
const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
const jsonHeaders = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: jsonHeaders });
}

function getPath(request) {
  return new URL(request.url).pathname
    .replace(/^\/\.netlify\/functions\/api/, '')
    .replace(/^\/api/, '') || '/';
}

function requireAdmin(request) {
  const token = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  if (!token) throw new Error('AUTH_REQUIRED');
  try { return jwt.verify(token, process.env.JWT_SECRET); }
  catch { throw new Error('AUTH_REQUIRED'); }
}

async function getItems(store) {
  return (await store.get('gallery-index', { type: 'json' })) || [];
}

async function saveItems(store, items) {
  await store.setJSON('gallery-index', items);
}

export default async (request) => {
  const path = getPath(request);
  const method = request.method;
  const store = getStore('riya-gallery');

  try {
    if (method === 'GET' && path === '/health') return json({ ok: true });
    if (method === 'GET' && path === '/categories') return json(categories);

    if (method === 'GET' && path === '/gallery') {
      const items = await getItems(store);
      const category = new URL(request.url).searchParams.get('category');
      return json(category ? items.filter((item) => item.category === category) : items);
    }

    if (method === 'GET' && path.startsWith('/uploads/')) {
      const key = `image-${path.slice('/uploads/'.length)}`;
      const entry = await store.getWithMetadata(key, { type: 'arrayBuffer' });
      if (!entry) return json({ message: 'Photo not found.' }, 404);
      return new Response(entry.data, {
        headers: { 'Content-Type': entry.metadata?.contentType || 'image/jpeg', 'Cache-Control': 'public, max-age=31536000, immutable' },
      });
    }

    if (method === 'POST' && path === '/admin/login') {
      const body = await request.json();
      const email = String(body.email || '').trim().toLowerCase();
      const adminEmail = String(process.env.ADMIN_EMAIL || '').trim().toLowerCase();
      const adminPassword = process.env.ADMIN_PASSWORD || '';
      if (!adminEmail || !adminPassword || email !== adminEmail || !bcrypt.compareSync(String(body.password || ''), bcrypt.hashSync(adminPassword, 10))) {
        return json({ message: 'Invalid email or password.' }, 401);
      }
      const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '8h' });
      return json({ token, admin: { email } });
    }

    if (path.startsWith('/admin/gallery')) requireAdmin(request);

    if (method === 'POST' && path === '/admin/gallery') {
      const form = await request.formData();
      const photo = form.get('photo');
      const category = String(form.get('category') || '');
      if (!(photo instanceof Blob) || !photo.size) return json({ message: 'Please select a photo.' }, 400);
      if (!allowedTypes.includes(photo.type)) return json({ message: 'Only JPG, PNG and WEBP images are allowed.' }, 400);
      if (photo.size > 8 * 1024 * 1024) return json({ message: 'Photo must be smaller than 8 MB.' }, 400);
      if (!categories.includes(category)) return json({ message: 'Please select a valid category.' }, 400);

      const id = crypto.randomUUID();
      await store.set(`image-${id}`, await photo.arrayBuffer(), { metadata: { contentType: photo.type } });
      const items = await getItems(store);
      const item = { id, title: String(form.get('title') || '').trim().slice(0, 100), category, imageUrl: `/api/uploads/${id}`, createdAt: new Date().toISOString() };
      items.unshift(item); await saveItems(store, items);
      return json(item, 201);
    }

    const match = path.match(/^\/admin\/gallery\/([^/]+)$/);
    if (match && method === 'PUT') {
      const id = match[1];
      const items = await getItems(store);
      const index = items.findIndex((item) => item.id === id);
      if (index < 0) return json({ message: 'Photo not found.' }, 404);
      const form = await request.formData();
      const category = String(form.get('category') || '');
      const photo = form.get('photo');
      if (!categories.includes(category)) return json({ message: 'Please select a valid category.' }, 400);
      if (photo instanceof Blob && photo.size) {
        if (!allowedTypes.includes(photo.type)) return json({ message: 'Only JPG, PNG and WEBP images are allowed.' }, 400);
        if (photo.size > 8 * 1024 * 1024) return json({ message: 'Photo must be smaller than 8 MB.' }, 400);
        await store.set(`image-${id}`, await photo.arrayBuffer(), { metadata: { contentType: photo.type } });
      }
      items[index] = { ...items[index], title: String(form.get('title') || '').trim().slice(0, 100), category, updatedAt: new Date().toISOString() };
      await saveItems(store, items); return json(items[index]);
    }

    if (match && method === 'DELETE') {
      const id = match[1];
      const items = await getItems(store);
      if (!items.some((item) => item.id === id)) return json({ message: 'Photo not found.' }, 404);
      await store.delete(`image-${id}`);
      await saveItems(store, items.filter((item) => item.id !== id));
      return json({ message: 'Photo deleted.' });
    }

    return json({ message: 'API route not found.' }, 404);
  } catch (error) {
    if (error.message === 'AUTH_REQUIRED') return json({ message: 'Session expired. Please login again.' }, 401);
    console.error(error);
    return json({ message: 'Server error. Please try again.' }, 500);
  }
};
