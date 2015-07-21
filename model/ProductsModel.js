var mongo = require('../db/mongo');

function ProductsModel() {};

//Cadastrar
ProductsModel.prototype.create = function (data, callback) {
	mongo.collection('products').save(data, callback);
};

//Consultar
ProductsModel.prototype.findOne = function(_id, callback){
	mongo.collection('products').findOne({"_id:" : mongo.ObjectId(_id)}, callback);
}

//Listar
ProductsModel.prototype.findAll =  function(callback){
	mongo.collection('products').findAll({}, callback);
};

//Atualizar
ProductsModel.prototype.upate = function(data, callback){
	mongo.collection('products').update(data, callback);	
};

ProductsModel.prototype.delete = function(_id, callback){
	mongo.collection('products').remove({_id: _id}, callback);	
};

module.exports = new ProductsModel();