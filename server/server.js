const express = require('express');
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-before-production';
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || 'admin@riyaartstudio.com').toLowerCase();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin@123';
const ADMIN_PASSWORD_HASH = bcrypt.hashSync(ADMIN_PASSWORD, 10);
const dataDir = path.join(__dirname, 'data');
const uploadsDir = path.join(__dirname, 'uploads');
const galleryFile = path.join(dataDir, 'gallery.json');

const CATEGORIES = [
  'Texture Art',
  'Acrylic Pouring',
  'Canvas Painting',
  'Resin Art',
  'Fabric Painting',
  'Charcoal Painting',
];

fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(uploadsDir, { recursive: true });
if (!fs.existsSync(galleryFile)) fs.writeFileSync(galleryFile, '[]');

app.use(cors({ origin: CLIENT_URL }));
app.use(express.json({ limit: '1mb' }));
app.use('/uploads', express.static(uploadsDir));

function readGallery() {
  try {
    const value = JSON.parse(fs.readFileSync(galleryFile, 'utf8'));
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function writeGallery(items) {
  fs.writeFileSync(galleryFile, JSON.stringify(items, null, 2));
}

function requireAdmin(req, res, next) {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ message: 'Login required.' });
  try {
    req.admin = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: 'Session expired. Please login again.' });
  }
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    cb(null, `${Date.now()}-${crypto.randomUUID()}${extension}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    cb(allowed.includes(file.mimetype) ? null : new Error('Only JPG, PNG and WEBP images are allowed.'), allowed.includes(file.mimetype));
  },
});

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.get('/api/categories', (_req, res) => res.json(CATEGORIES));
app.get('/api/gallery', (req, res) => {
  const category = req.query.category;
  const items = readGallery();
  res.json(category ? items.filter((item) => item.category === category) : items);
});

app.post('/api/admin/login', (req, res) => {
  const email = String(req.body.email || '').trim().toLowerCase();
  const password = String(req.body.password || '');
  const passwordMatches = bcrypt.compareSync(password, ADMIN_PASSWORD_HASH);
  if (email !== ADMIN_EMAIL || !passwordMatches) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }
  const token = jwt.sign({ email, role: 'admin' }, JWT_SECRET, { expiresIn: '8h' });
  res.json({ token, admin: { email } });
});

app.post('/api/admin/gallery', requireAdmin, upload.single('photo'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'Please select a photo.' });
  if (!CATEGORIES.includes(req.body.category)) {
    fs.unlinkSync(req.file.path);
    return res.status(400).json({ message: 'Please select a valid category.' });
  }
  const items = readGallery();
  const item = {
    id: crypto.randomUUID(),
    title: String(req.body.title || '').trim().slice(0, 100),
    category: req.body.category,
    imageUrl: `/uploads/${req.file.filename}`,
    createdAt: new Date().toISOString(),
  };
  items.unshift(item);
  writeGallery(items);
  res.status(201).json(item);
});

app.put('/api/admin/gallery/:id', requireAdmin, upload.single('photo'), (req, res) => {
  const items = readGallery();
  const index = items.findIndex((entry) => entry.id === req.params.id);
  if (index === -1) {
    if (req.file && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
    return res.status(404).json({ message: 'Photo not found.' });
  }
  if (!CATEGORIES.includes(req.body.category)) {
    if (req.file && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
    return res.status(400).json({ message: 'Please select a valid category.' });
  }

  const previous = items[index];
  const updated = {
    ...previous,
    title: String(req.body.title || '').trim().slice(0, 100),
    category: req.body.category,
    imageUrl: req.file ? `/uploads/${req.file.filename}` : previous.imageUrl,
    updatedAt: new Date().toISOString(),
  };
  items[index] = updated;
  writeGallery(items);
  if (req.file) {
    const previousFile = path.join(uploadsDir, path.basename(previous.imageUrl));
    if (fs.existsSync(previousFile)) fs.unlinkSync(previousFile);
  }
  res.json(updated);
});

app.delete('/api/admin/gallery/:id', requireAdmin, (req, res) => {
  const items = readGallery();
  const item = items.find((entry) => entry.id === req.params.id);
  if (!item) return res.status(404).json({ message: 'Photo not found.' });
  const filePath = path.join(uploadsDir, path.basename(item.imageUrl));
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  writeGallery(items.filter((entry) => entry.id !== item.id));
  res.json({ message: 'Photo deleted.' });
});

app.use((error, _req, res, _next) => {
  if (error instanceof multer.MulterError && error.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ message: 'Photo must be smaller than 8 MB.' });
  }
  res.status(400).json({ message: error.message || 'Something went wrong.' });
});

app.listen(PORT, () => console.log(`Riya Art Studio API running at http://localhost:${PORT}`));
