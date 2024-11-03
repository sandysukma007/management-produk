const Product = require('../models/productModel');
const getProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};
const getProductById = (req, res) => {
  const id = req.params.id;
  Product.getById(id, (err, results) => {
    if (err) res.status(500).send(err);
    if (results.length === 0) res.status(404).send('Product not found');
    res.json(results[0]);
  });
};
const createProduct = (req, res) => {
  const data = req.body;
  Product.create(data, (err, results) => {
    if (err) res.status(500).send(err);
    res.status(201).json({ id: results.insertId, ...data });
  });
};
const updateProduct = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Product.update(id, data, (err, results) => {
    if (err) res.status(500).send(err);
    if (results.affectedRows === 0) res.status(404).send('Product not found');
    res.json({ id, ...data });
  });
};
const deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.delete(id, (err, results) => {
    if (err) res.status(500).send(err);
    if (results.affectedRows === 0) res.status(404).send('Product not found');
    res.json({ message: 'Product deleted' });
  });
};
module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
