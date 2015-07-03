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
			res.status(201).json(result);	
		})
		.catch(function(err){
			res.status(400).send('Ocorreu um erro na sua requisição');
		});	
};

//findAll
UsersController.prototype.findAll= function (req, res) {
	
	this.Model.findAllAsync()
		.then(function(result){
			res.status(200).json(result);	
		})
		.catch(function(err){
			res.status(400).send('Ocorreu um erro na sua requisição');
		});
};


//findOne
UsersController.prototype.findOne = function(req,res){
	var id = req.params.id;
	
	this.Model.findOneAsync(id)
		.then(function(result){
			res.status(200).json(result);	
		})
		.catch(function(err){
			res.status(400).send('Ocorreu um erro na sua requisição');
		});	
};

//update
UsersController.prototype.update = function(req,res){
	var id = req.params.id,
		data = req.body;
		
	this.Model.updateAsync(id, data)
		.then(function(result){
			var status = 200;
			if(!result)
				status = 304; //Not Modified
				
			res.status(status).json(data);
		})
		.catch(function(err){
			console.log('err', err);
			res.status(400).send('Ocorreu um erro na sua requisição');
		});	
};

//delete
UsersController.prototype.delete = function(req,res){
	var id = req.params.id;
	
	this.Model.deleteAsync(id)
		.then(function(result){
			res.status(200).json(result);	
		})
		.catch(function(err){
			res.status(400).send('Ocorreu um erro na sua requisição');
		});	
};

module.exports = new UsersController(UsersModel);