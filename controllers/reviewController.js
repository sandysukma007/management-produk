const Review = require('../models/reviewModel');
const getReviews = (req, res) => Review.getAll((err, results) => err ? res.status(500).send(err) : res.json(results));
const getReviewById = (req, res) => Review.getById(req.params.id, (err, results) => results.length === 0 ? res.status(404).send('Review not found') : res.json(results[0]));
const createReview = (req, res) => Review.create(req.body, (err, results) => res.status(201).json({ id: results.insertId, ...req.body }));
const updateReview = (req, res) => Review.update(req.params.id, req.body, (err, results) => results.affectedRows === 0 ? res.status(404).send('Review not found') : res.json({ id: req.params.id, ...req.body }));
const deleteReview = (req, res) => Review.delete(req.params.id, (err, results) => results.affectedRows === 0 ? res.status(404).send('Review not found') : res.json({ message: 'Review deleted' }));
module.exports = { getReviews, getReviewById, createReview, updateReview, deleteReview };
