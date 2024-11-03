const db = require('../config/db');
const Category = require('../models/categoryModel');
const getCategories = (req, res) => Category.getAll((err, results) => err ? res.status(500).send(err) : res.json(results));
const getCategoryById = (req, res) => Category.getById(req.params.id, (err, results) => results.length === 0 ? res.status(404).send('Category not found') : res.json(results[0]));
const createCategory = (req, res) => Category.create(req.body, (err, results) => res.status(201).json({ id: results.insertId, ...req.body }));
const updateCategory = (req, res) => Category.update(req.params.id, req.body, (err, results) => results.affectedRows === 0 ? res.status(404).send('Category not found') : res.json({ id: req.params.id, ...req.body }));
const deleteCategory = (req, res) => Category.delete(req.params.id, (err, results) => results.affectedRows === 0 ? res.status(404).send('Category not found') : res.json({ message: 'Category deleted' }));
module.exports = { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
