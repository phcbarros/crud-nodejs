var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'techsystem',
  user     : 'root',
  password : ''
});

connection.connect(function(err){
  if(err)
    console.error('error connecting: ' + err.stack);
   
   return;
});

module.exports = connection;