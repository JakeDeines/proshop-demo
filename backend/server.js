// ES MODULE SYNTAX
//const express = require('express'); ( DEFAULT COMMON JS)
import express from 'express';
import products from './data/products.js';



// frontend is running on 3000 
const port = 5000;
//initilize express
const app = express();

// first route
app.get('/', (req, res) => {
res.send('API is running...');

});
// route for all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// route for single products
app.get('/api/products/:id', (req, res) => {
    const product = product.find((p) => p._id === req.params.id);
    res.json(product);
})


// start server

app.listen(port, () => console.log(`Server running on port ${port}`))