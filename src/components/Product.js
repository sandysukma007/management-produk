import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const Product = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    const productWithId = { id: Date.now(), ...newProduct };
    setProducts([...products, productWithId]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Manajemen Produk</h1>
      <ProductForm onSubmit={handleAddProduct} />
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default Product;
