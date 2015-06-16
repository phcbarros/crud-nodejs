var UsersModel = require('../model/UsersModel');
var Promise = require('bluebird');

// função construtora
function UsersController(Model) {
	this.Model = Promise.promisifyAll(Model);
}

//create
UsersController.prototype.create = function(req,res){
	var id = req.params.id,
		data = req.body;

	this.Model.createAsync(id, data)
		.then(function(result){
			res.json(result);	
		})
		.catch(function(err){
			console.log('err', err);
		});	
};

//findAll
UsersController.prototype.findAll= function (req, res) {
	
	this.Model.findAllAsync()
		.then(function(result){
			res.json(result);	
		})
		.catch(function(err){
			console.log('err', err);
		});
};


//findOne
UsersController.prototype.findOne = function(req,res){
	var id = req.params.id;
	
	this.Model.findOneAsync(id)
		.then(function(result){
			res.json(result);	
		})
		.catch(function(err){
			console.log('err', err);
		});	
};

//update
UsersController.prototype.update = function(req,res){
	var id = req.params.id,
		data = req.body;
		
	this.Model.updateAsync(id, data)
		.then(function(result){
			res.json(result);	
		})
		.catch(function(err){
			console.log('err', err);
		});	
};

//delete
UsersController.prototype.delete = function(req,res){
	var id = req.params.id;
	
	this.Model.deleteAsync(id)
		.then(function(result){
			res.json(result);	
		})
		.catch(function(err){
			console.log('err', err);
		});	
};

module.exports = new UsersController(UsersModel);