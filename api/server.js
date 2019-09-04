const express = require('express');
const productsRouter = require('../products/products-router.js');
const suppliersRouter = require('../suplliers/suppliers-router.js')

const server = express();


//global middleware
server.use(express.json());
//server.use(uppercaser); // using custom middleware globally

server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter);

//route handlers
server.get('/', (req, res) => {
    res.status(200).json({api: "...running"})
});





module.exports = server;