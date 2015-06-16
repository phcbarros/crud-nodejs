var ProductsModel = require('../model/ProductsModel');

function ProductsController(Model){
	this.Model = Model;
};

ProductsController.prototype.create = function(req, res){
	var data = req.body;
	this.Model.create(data, function(err, res){
		if(err) throw err;			
		res.status(201).json(data);
	});
};

module.exports = new ProductsController(ProductsModel);