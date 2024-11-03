const db = require('../config/db');
const User = require('../models/userModel');
const getUsers = (req, res) => User.getAll((err, results) => err ? res.status(500).send(err) : res.json(results));
const getUserById = (req, res) => User.getById(req.params.id, (err, results) => results.length === 0 ? res.status(404).send('User not found') : res.json(results[0]));
const createUser = (req, res) => User.create(req.body, (err, results) => res.status(201).json({ id: results.insertId, ...req.body }));
const updateUser = (req, res) => User.update(req.params.id, req.body, (err, results) => results.affectedRows === 0 ? res.status(404).send('User not found') : res.json({ id: req.params.id, ...req.body }));
const deleteUser = (req, res) => User.delete(req.params.id, (err, results) => results.affectedRows === 0 ? res.status(404).send('User not found') : res.json({ message: 'User deleted' }));
module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
