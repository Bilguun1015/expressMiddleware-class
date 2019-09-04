const express = require('express');

const router = express.Router();

function uppercaser(req, res, next) {
    let name = req.params.name;
    if(name){
        req.name = name.toUpperCase();
    }
    next();
}

// const router = require('express').Router();
// a router can have middleware that applies only to the router
router.use(express.json());

// this router handles urls that begin with /products

// GET to /products/
router.get('/', (req, res) => {
    res.send('get to /suppliers/')
});

//GET to /products/:id
router.get('/:name',uppercaser, (req, res) => {
    const { name } = req.params
    res.send(`get to /suppliers/${req.name}`)
});

module.exports = router;