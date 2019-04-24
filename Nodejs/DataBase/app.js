'use strict'

var express = require("express");
var app = express();
app.use(express.static("public"));
var bodyParser = require("body-parser");
app.use(bodyParser.json());
// La sintaxis {extended:true} permite que se puedan procesar objetos y arrays.
app.use(bodyParser.urlencoded( { extended:true } ));
var mongoose = require("mongoose");

/* Conexión a la base de datos*/
var db = mongoose.connection;
mongoose.connect("mongodb://localhost/pokemons", {useNewUrlParser:true});
// .bind() es un método que parsea el mensaje de error para que se pueda ver
db.on('error', console.log.bind(console, 'connection error'));
db.once('open', function(){
  console.log('Conectado a la Pokédex.');
});

var pokemonSchema = new mongoose.Schema({
  Nombre: String,
  Tipo: String,
  Imagen: String,
  Descripción: String
});

var pokemon = mongoose.model("pokemons", pokemonSchema);

var tipoSchema = new mongoose.Schema({
  Tipo: String
});

var tipo = mongoose.model("tipos", tipoSchema);

/* Peticiones por GET */
//NOTA: La función anónima es un callback
//Los datos van a ser el listado de tipos, lo que en el cliente se llama listado
app.get('/tipos', function(req, res){
  tipo.find({}, function(error, datos){
    console.log(datos);
    res.send(datos);
  });
});

app.get('/seleccion', function(req, res){
  pokemon.find({Tipo:req.query.tipo}, function(error, datos){
    res.send(datos);
  })
});


var server = app.listen(8080, function()
{
  console.log("Servidor corriendo en el puerto 8080");
});
