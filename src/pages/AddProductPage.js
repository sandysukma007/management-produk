import React, { useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';

const AddProductPage = () => {
  const [error, setError] = useState('');

  const handleAddProduct = async (newProduct) => {
    try {
      await axios.post('http://localhost:4000/products', newProduct);
      alert('Produk berhasil ditambahkan');
    } catch (error) {
      setError('Gagal menambah produk');
    }
  };

  return (
    <div>
      <h1>Tambah Produk</h1>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
};

export default AddProductPage;
