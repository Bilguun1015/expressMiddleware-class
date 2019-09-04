const express = require('express');

const router = express.Router();

// a router can have middleware that applies only to the router
router.use(express.json());

// this router handles urls that begin with /products

// GET to /products/
router.get('/', (req, res) => {
    res.send('get to /supliers/')
});

//GET to /products/:id
router.get('/:name', (req, res) => {
    const { name } = req.params
    res.send(`get to /supliers/${name}`)
});

module.exports = router;