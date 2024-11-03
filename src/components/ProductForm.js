import React, { useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, price, stock });
    setName('');
    setDescription('');
    setPrice('');
    setStock('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Tambah Produk</h2>
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
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Simpan Produk</button>
    </form>
  );
};

export default ProductForm;
