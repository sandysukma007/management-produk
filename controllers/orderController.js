const Order = require('../models/orderModel');
const getOrders = (req, res) => Order.getAll((err, results) => err ? res.status(500).send(err) : res.json(results));
const getOrderById = (req, res) => Order.getById(req.params.id, (err, results) => results.length === 0 ? res.status(404).send('Order not found') : res.json(results[0]));
const createOrder = (req, res) => Order.create(req.body, (err, results) => res.status(201).json({ id: results.insertId, ...req.body }));
const updateOrder = (req, res) => Order.update(req.params.id, req.body, (err, results) => results.affectedRows === 0 ? res.status(404).send('Order not found') : res.json({ id: req.params.id, ...req.body }));
const deleteOrder = (req, res) => Order.delete(req.params.id, (err, results) => results.affectedRows === 0 ? res.status(404).send('Order not found') : res.json({ message: 'Order deleted' }));
module.exports = { getOrders, getOrderById, createOrder, updateOrder, deleteOrder };
