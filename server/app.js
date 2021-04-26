const express = require('express');
const app = express();
const cors = require('cors');

// CONTROLLER IMPORTS
const productController = require('./controllers/productController');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.use('/api/products', productController);

module.exports = app;