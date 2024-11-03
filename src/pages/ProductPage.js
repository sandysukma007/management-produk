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
        console.log('Data produk diterima:', response.data);
        setProducts(response.data);
      } catch (error) {
        setError('Gagal memuat produk');
        console.error('Error fetching products:', error);
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
      console.error('Error adding product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      setError('Gagal menghapus produk');
      console.error('Error deleting product:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manajemen Produk</h1>
      <ProductForm onSubmit={handleAddProduct} />
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default ProductPage;
