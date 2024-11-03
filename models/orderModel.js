const db = require('../config/db');
const Order = {
  getAll: (callback) => db.query('SELECT * FROM orders', callback),
  getById: (id, callback) => db.query('SELECT * FROM orders WHERE id = ?', [id], callback),
  create: (data, callback) => db.query('INSERT INTO orders SET ?', data, callback),
  update: (id, data, callback) => db.query('UPDATE orders SET ? WHERE id = ?', [data, id], callback),
  delete: (id, callback) => db.query('DELETE FROM orders WHERE id = ?', [id], callback)
};
module.exports = Order;
