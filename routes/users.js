var express = require("express"),
	router 	= express.Router(), 
	path 	= require("path"),
	UsersController = require('../controller/UsersController');
	
	
//api/users
router.get('/api/users', 	  	UsersController.findAll.bind(UsersController));
router.get('api/users/:id',  	UsersController.findOne.bind(UsersController));
router.put('api//users/:id',	UsersController.update.bind(UsersController));
router.delete('api//users/:id', UsersController.delete.bind(UsersController));
router.post('api/users', 		UsersController.create.bind(UsersController));

module.exports = router;