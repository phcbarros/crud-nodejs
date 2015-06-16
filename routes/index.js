var express = require('express');
var router = express.Router();

var ProductsController = require('../controller/ProductsController');
var UsersController = require('../controller/UsersController');

// GET products
router.get('/products', function (req, res) {
  res.json([
    {"name": "wine"},
    {"name": "Dool"},
	{"name": "Car"}, 
	{"name": "Phone"}
    ]);
});

// get /products/:_id
router.get('/products/:_id', function (req, res) {
	var _id = parseInt(req.params._id);	
	res.json({"name": "wine", "id": _id});
});

// accept POST request 
router.post('/products', ProductsController.create.bind(ProductsController));

// accept PUT request 
router.put('/products', function (req, res) {
	var _id = parseInt(req.params._id);	
  	res.status(200).json({"status": "updated"});
});

// DELETE products;:_id
router.delete('/products/:_id', function (req, res) {
	var _id = parseInt(req.params._id);	
  	res.status(200).json({"status": "deleted"});
});


//users
router.get('/users', 	  	UsersController.findAll.bind(UsersController));
router.get('/users/:id',  	UsersController.findOne.bind(UsersController));
router.put('/users/:id',	UsersController.update.bind(UsersController));
router.delete('/users/:id', UsersController.delete.bind(UsersController));
router.post('/users', 		UsersController.create.bind(UsersController));


module.exports = router;