var mongo = require('../db/mongo');

function ProductsModel() {
	
};

ProductsModel.prototype.create = function (data, callback) {
	mongo.collection('products').save(data, callback);
};

module.exports = new ProductsModel();