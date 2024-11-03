const db = require('../config/db');
const Category = {
  getAll: (callback) => db.query('SELECT * FROM categories', callback),
  getById: (id, callback) => db.query('SELECT * FROM categories WHERE id = ?', [id], callback),
  create: (data, callback) => db.query('INSERT INTO categories SET ?', data, callback),
  update: (id, data, callback) => db.query('UPDATE categories SET ? WHERE id = ?', [data, id], callback),
  delete: (id, callback) => db.query('DELETE FROM categories WHERE id = ?', [id], callback)
};
module.exports = Category;
