/* Módulos requeridos */
var express = require('express');
var app = express();

/* Servir páginas */
app.use(express.static('public'));                                              // Carpeta 'public', donde están las páginas estáticas que servimos















/* Arranque de servidor */
var server = app.listen(8080, function(){
  console.log('Servidor corriendo en el puerto 8080');
});
