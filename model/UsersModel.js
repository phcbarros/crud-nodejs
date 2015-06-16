var mysql = require('../db/mysql'); //conexsão com o banco

//função construtora
function UsersModel(){
	
}

//create
UsersModel.prototype.create = function (id, data, callback) {
	
	var user = {
			nome: data.nome,
			email: data.email,
			statusid: 1,
			empresaid: 1
		};
		
	mysql.query('INSERT INTO usuarios SET ?', user, 
		function(err, result){
			user.id = result.insertId;
			callback(err, user);
	});
};

//findAll
UsersModel.prototype.findAll = function (callback) {
	mysql.query('SELECT * FROM usuarios WHERE statusid=1 ORDER BY nome;', function(err, rows, fields){
		callback(err, rows);
	});
};

//findOne
UsersModel.prototype.findOne = function (id, callback) {
	
	mysql.query('SELECT * FROM usuarios WHERE id = ' + id + ' ORDER BY nome;', 
		function(err, rows, fields){
			callback(err, rows[0]);
	});
};

//update
UsersModel.prototype.update = function (id, data, callback) {
		
	mysql.config.queryFormat = function (query, values) {
  		if (!values) return query;
  			return query.replace(/\:(\w+)/g, function (txt, key) {
	    if (values.hasOwnProperty(key)) {
	      return this.escape(values[key]);
	    }
	    return txt;
	  }.bind(this));
	};
	
	mysql.query('UPDATE usuarios SET nome = :nome WHERE id = :id', data, 
		function(err, result){
			callback(err, result);
	});
};

//delete
UsersModel.prototype.delete = function (id, callback) {
	
	var sql = [];
	sql.push('UPDATE usuarios SET');
	sql.push(' statusid = 2 ');
	sql.push(' WHERE id = ' + id);
	
	mysql.query(sql.join(''), 
		function(err, result){
			callback(err, result);
	});
};

module.exports = new UsersModel();