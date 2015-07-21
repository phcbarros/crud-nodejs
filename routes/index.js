var express = require('express');
var router = express.Router();

var ProductsController = require('../controller/ProductsController');

// GET /products
router.get('/products', ProductsController.findAll.bind(ProductsController));
// GET /products/:_id
router.get('/products/:_id', ProductsController.findOne.bind(ProductsController));
// POST /products
router.post('/products', ProductsController.create.bind(ProductsController));
// PUT /products 
router.put('/products', ProductsController.update.bind(ProductsController));
// DELETE /products/:_id
router.delete('/products/:_id', ProductsController.delete.bind(ProductsController));

module.exports = router;