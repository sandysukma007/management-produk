const db = require('../config/db');
const Product = require('../models/productModel');

const getProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

const getProductById = (req, res) => {
  const id = req.params.id;
  Product.getById(id, (err, results) => {
    if (err) {
      console.error('Error fetching product:', err);
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('Product not found');
    }
    res.json(results[0]);
  });
};

const createProduct = (req, res) => {
    const { name, description, price, stock, sku, weight, status, user_id, category_id } = req.body; // Tambahkan category_id
    const sql = 'INSERT INTO products (name, description, price, stock, sku, weight, status, user_id, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
    db.query(sql, [name, description, price, stock, sku, weight, status, user_id, category_id], (err, result) => {
      if (err) {
        console.error('Error inserting product:', err);
        return res.status(500).json({ error: 'Gagal menambahkan produk' });
      }
      res.status(201).json({ id: result.insertId, name, description, price, stock, sku, weight, status, user_id, category_id });
    });
  };
  
  

const updateProduct = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  Product.update(id, data, (err, results) => {
    if (err) {
      console.error('Error updating product:', err);
      return res.status(500).send(err);
    }
    if (results.affectedRows === 0) {
      return res.status(404).send('Product not found');
    }
    res.json({ id, ...data });
  });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;

  Product.delete(id, (err, results) => {
    if (err) {
      console.error('Error deleting product:', err);
      return res.status(500).send(err);
    }
    if (results.affectedRows === 0) {
      return res.status(404).send('Product not found');
    }
    res.json({ message: 'Product deleted' });
  });
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
