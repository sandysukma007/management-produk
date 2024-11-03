const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const app = express();
app.use(bodyParser.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/orders', orderRoutes);
app.use('/reviews', reviewRoutes);
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
