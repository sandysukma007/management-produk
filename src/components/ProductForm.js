import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [userId, setUserId] = useState('');
  const [categoryId, setCategoryId] = useState(''); // Untuk category_id
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]); // Untuk menyimpan daftar kategori
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Gagal memuat pengguna:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/categories'); // Endpoint untuk mendapatkan kategori
        setCategories(response.data);
      } catch (error) {
        console.error('Gagal memuat kategori:', error);
      }
    };

    fetchUsers();
    fetchCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price || !stock || !userId || !categoryId) { // Tambahkan kategori ke validasi
      setError('Semua kolom harus diisi');
      return;
    }
    setError('');
    onSubmit({ name, description, price: parseFloat(price), stock: parseInt(stock), user_id: userId, category_id: categoryId }); // Sertakan category_id
    setName('');
    setDescription('');
    setPrice('');
    setStock('');
    setUserId('');
    setCategoryId('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Tambah Produk</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <input
        type="text"
        placeholder="Nama Produk"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <textarea
        placeholder="Deskripsi"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Harga"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Stok"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <select
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      >
        <option value="">Pilih User</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      >
        <option value="">Pilih Kategori</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Simpan Produk</button>
    </form>
  );
};

export default ProductForm;
