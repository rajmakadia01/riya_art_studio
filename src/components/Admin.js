import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { API_URL, apiRequest } from '../api';
import './Admin.css';

const categories = ['Texture Art', 'Acrylic Pouring', 'Canvas Painting', 'Resin Art', 'Fabric Painting', 'Charcoal Painting'];
const categoryOptions = categories.map((name) => ({ value: name, label: name }));
const selectStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: 50,
    borderRadius: 8,
    borderColor: state.isFocused ? '#e55757' : '#ddd',
    boxShadow: state.isFocused ? '0 0 0 3px rgba(229,87,87,.14)' : 'none',
    cursor: 'pointer',
    '&:hover': { borderColor: '#e55757' },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? '#e55757' : state.isFocused ? '#fff0f0' : '#fff',
    color: state.isSelected ? '#fff' : '#222',
    cursor: 'pointer',
    ':active': { backgroundColor: state.isSelected ? '#d94c4c' : '#ffe0e0' },
  }),
  singleValue: (base) => ({ ...base, color: '#e55757', fontWeight: 600 }),
  dropdownIndicator: (base, state) => ({ ...base, color: state.isFocused ? '#e55757' : '#777', '&:hover': { color: '#e55757' } }),
  indicatorSeparator: (base) => ({ ...base, backgroundColor: '#f2b6b6' }),
  menu: (base) => ({ ...base, zIndex: 20, borderRadius: 10, overflow: 'hidden' }),
};

export default function Admin() {
  const [token, setToken] = useState(() => sessionStorage.getItem('adminToken') || '');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState(null);
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editCategory, setEditCategory] = useState(categories[0]);
  const [editPhoto, setEditPhoto] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);

  const loadItems = async () => {
    try { setItems(await apiRequest('/api/gallery')); }
    catch (error) { setMessage(error.message); }
  };

  useEffect(() => { if (token) loadItems(); }, [token]);

  const login = async (event) => {
    event.preventDefault(); setLoading(true); setMessage('');
    try {
      const data = await apiRequest('/api/admin/login', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }),
      });
      sessionStorage.setItem('adminToken', data.token); setToken(data.token);
    } catch (error) { setMessage(error.message); }
    finally { setLoading(false); }
  };

  const addPhoto = async (event) => {
    event.preventDefault();
    if (!photo) return setMessage('Please select a photo.');
    setLoading(true); setMessage('');
    const form = new FormData();
    form.append('photo', photo); form.append('category', category); form.append('title', title);
    try {
      await apiRequest('/api/admin/gallery', { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: form });
      setTitle(''); setPhoto(null); event.target.reset(); setMessage('Photo added to the gallery successfully.'); await loadItems();
    } catch (error) { setMessage(error.message); }
    finally { setLoading(false); }
  };

  const startEdit = (item) => {
    setEditingId(item.id); setEditTitle(item.title || ''); setEditCategory(item.category); setEditPhoto(null); setMessage('');
  };

  const saveEdit = async (event) => {
    event.preventDefault(); setLoading(true); setMessage('');
    const form = new FormData();
    form.append('title', editTitle); form.append('category', editCategory);
    if (editPhoto) form.append('photo', editPhoto);
    try {
      const updated = await apiRequest(`/api/admin/gallery/${editingId}`, {
        method: 'PUT', headers: { Authorization: `Bearer ${token}` }, body: form,
      });
      setItems((current) => current.map((item) => item.id === updated.id ? updated : item));
      setEditingId(''); setEditPhoto(null); setMessage('Photo updated successfully.');
    } catch (error) { setMessage(error.message); }
    finally { setLoading(false); }
  };

  const deletePhoto = async () => {
    if (!pendingDelete) return;
    const id = pendingDelete.id;
    setLoading(true);
    try {
      await apiRequest(`/api/admin/gallery/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
      setItems((current) => current.filter((item) => item.id !== id));
      setPendingDelete(null); setMessage('Photo deleted successfully.');
    } catch (error) { setMessage(error.message); }
    finally { setLoading(false); }
  };

  const logout = () => { sessionStorage.removeItem('adminToken'); setToken(''); setItems([]); };

  if (!token) return <main className="admin-page"><form className="admin-card admin-login" onSubmit={login}><h1>Admin Login</h1><label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label><label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>{message && <p className="admin-message error">{message}</p>}<button disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button></form></main>;

  return <main className="admin-page">
    <div className="admin-heading"><div><h1>Gallery Admin</h1><p>Add, edit or delete all uploaded photos.</p></div><button className="secondary" onClick={logout}>Logout</button></div>
    <form className="admin-card upload-form" onSubmit={addPhoto}>
      <label>Photo title (optional)<input value={title} onChange={(e) => setTitle(e.target.value)} maxLength="100" /></label>
      <label>Category<Select className="admin-category-select" options={categoryOptions} value={categoryOptions.find((item) => item.value === category)} onChange={(item) => setCategory(item.value)} styles={selectStyles} isSearchable={false} /></label>
      <label>Photo (JPG, PNG, WEBP — max 8 MB)<input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => setPhoto(e.target.files[0])} required /></label>
      {message && <p className="admin-message">{message}</p>}<button disabled={loading}>{loading ? 'Please wait...' : 'Add to Gallery'}</button>
    </form>
    <section className="admin-list"><h2>All Uploaded Photos ({items.length})</h2>{items.length === 0 && <p>No photos have been uploaded yet.</p>}
      <div className="admin-grid">{items.map((item) => <article key={item.id}>
        <img src={`${API_URL}${item.imageUrl}`} alt={item.title || item.category} />
        {editingId === item.id ? <form className="edit-photo-form" onSubmit={saveEdit}>
          <label>Title<input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} maxLength="100" /></label>
          <label>Category<Select className="admin-category-select" options={categoryOptions} value={categoryOptions.find((item) => item.value === editCategory)} onChange={(item) => setEditCategory(item.value)} styles={selectStyles} isSearchable={false} menuPosition="fixed" /></label>
          <label>Replace photo (optional)<input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => setEditPhoto(e.target.files[0])} /></label>
          <div className="admin-actions"><button disabled={loading}>Save</button><button type="button" className="secondary" onClick={() => setEditingId('')}>Cancel</button></div>
        </form> : <div className="photo-details"><strong>{item.title || 'Untitled'}</strong><small>{item.category}</small><div className="admin-actions"><button onClick={() => startEdit(item)}>Edit</button><button className="danger" onClick={() => setPendingDelete(item)}>Delete</button></div></div>}
      </article>)}</div>
    </section>
    {pendingDelete && <div className="modal-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget && !loading) setPendingDelete(null); }}>
      <div className="delete-modal" role="dialog" aria-modal="true" aria-labelledby="delete-title">
        <div className="delete-icon" aria-hidden="true">!</div>
        <h2 id="delete-title">Delete this photo?</h2>
        <p>This photo will be permanently removed from the gallery. This action cannot be undone.</p>
        <div className="delete-preview"><img src={`${API_URL}${pendingDelete.imageUrl}`} alt={pendingDelete.title || pendingDelete.category} /><div><strong>{pendingDelete.title || 'Untitled'}</strong><small>{pendingDelete.category}</small></div></div>
        <div className="modal-actions"><button className="modal-cancel" onClick={() => setPendingDelete(null)} disabled={loading}>Cancel</button><button className="modal-delete" onClick={deletePhoto} disabled={loading}>{loading ? 'Deleting...' : 'Delete Photo'}</button></div>
      </div>
    </div>}
  </main>;
}
