var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'techsystem',
  user     : 'root',
  password : ''
});

connection.config.queryFormat = function (query, values) {
		if (!values) return query;
			return query.replace(/\:(\w+)/g, function (txt, key) {
        if (values.hasOwnProperty(key)) {
          return this.escape(values[key]);
        }
	     return txt;
    }.bind(this));
};

connection.connect(function(err){
  if(err)
    console.error('error connecting: ' + err.stack);
   
   return;
});

//trata os erros sem callbacks pendentes
connection.on('error', function(err) {
  console.log(err.code); // 'ER_BAD_DB_ERROR'
});

module.exports = connection;