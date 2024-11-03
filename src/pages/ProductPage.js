import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        setProducts(response.data);
      } catch (error) {
        setError('Gagal memuat produk');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async (newProduct) => {
    try {
      const response = await axios.post('http://localhost:4000/products', newProduct);
      setProducts([...products, response.data]);
    } catch (error) {
      setError('Gagal menambah produk');
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      setError('Gagal menghapus produk');
    }
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    try {
      const response = await axios.put(`http://localhost:4000/products/${id}`, updatedProduct);
      setProducts(products.map((product) => (product.id === id ? response.data : product)));
    } catch (error) {
      setError('Gagal memperbarui produk');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manajemen Produk</h1>
      <ProductForm onSubmit={handleAddProduct} />
      <ProductList products={products} onDelete={handleDeleteProduct} onUpdate={handleUpdateProduct} />
    </div>
  );
};

export default ProductPage;
