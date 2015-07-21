var ProductsModel 	= require('../model/ProductsModel'),
	Promise 		= require('bluebird');

function ProductsController(Model){
	this.Model = Promise.promisifyAll(Model);
};

//Cadastrar
ProductsController.prototype.create = function(req, res){
	
	var data = req.body;
	
	this.Model.createAsync(data)
		.then(function(result){
			res.json(result);
		})
		.catch(function(err){
			console.log(err);
		});
	
};

//consultar
ProductsController.prototype.findOne = function(req, res){
	var _id = req.params._id;
	
	this.Model.findOneAsync(_id)
		.then(function(result){
			res.json(result);
		})
		.catch(function(err){
			console.log(err);
		});
};

//listar
ProductsController.prototype.findAll = function(req, res){
	
	this.Model.findAllAsync()
		.then(function(result){
			res.json(result);
		})
		.catch(function(err){
			console.log(err);
		});
};

//atualizar
ProductsController.prototype.update = function(req, res){
	
	var _id = req.params._id,
		data = req.body;
	
	this.Model.updateAsync(data, _id)
		.then(function(result){
			res.json(result);
		})
		.catch(function(err){
			console.log(err);
		});
};

//excluir
ProductsController.prototype.delete = function(req, res){
	var _id = req.params._id;
	
	this.Model.deleteAsync(_id)
		.then(function(result){
			res.json(result);
		})
		.catch(function(err){
			console.log(err);
		});
};

module.exports = new ProductsController(ProductsModel);