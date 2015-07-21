/// <reference path="typings/node/node.d.ts"/>
var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override');

var users = require('./routes/users');
var products = require('./routes/index');

// Configuração do ambiente
//app.set("view engine", "html");
//app.set("views", __dirname + "/views");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//arquivos estáticos
app.use("/static/bootstrap/css", express.static("bower_components/bootstrap/dist/css"));
app.use("/static/bootstrap/js", express.static("bower_components/bootstrap/dist/js"));
app.use("/static/jquery", express.static("bower_components/jquery/dist"));

app.use(methodOverride('X-HTTP-Method'));          // Microsoft
app.use(methodOverride('X-HTTP-Method-Override')); // Google/GData
app.use(methodOverride('X-Method-Override'));      // IBM
app.use(methodOverride('_method'));

//rotas
app.use('/',products);
app.use('/',users);

app.get("/users", function(req, res) {
 res.sendFile(__dirname + "/views/users.html");
 //res.sendFile("./views/users.html");
});



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