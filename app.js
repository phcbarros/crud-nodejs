var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var routes = require('./routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(methodOverride('X-HTTP-Method'));          // Microsoft
app.use(methodOverride('X-HTTP-Method-Override')); // Google/GData
app.use(methodOverride('X-Method-Override'));      // IBM
app.use(methodOverride('_method'));

//rotas
app.use('/',routes);

//erro
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  
  console.log('Example app listen at http://%s:%s', host, port);
  
});

module.exports = app;