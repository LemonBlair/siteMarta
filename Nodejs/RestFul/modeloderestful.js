/* Paquetes o módulos que voy a usar */
var express = require('express');
var bodyParser = require('body-parser');
// Las peticiones por post y put (las que vienen del body) se envían en json, por eso hay que parsearlas.

/* Tratamiento de las urls */
var app = express(); //Instancia de express
app.use(bodyParser.json()); //Parseamos las peticiones que lleguen por json (put y post)
app.use(bodyParser.urlencoded({
    extended: false  // Solo parsea la url si está en false. Si estuviera en true, parsearia otras cosas como imágenes
                      // Mandamos el atributo y su valor (la propiedad del objeto) en json, muy común en node.js
}));

/*Lo que sería la aplicación */

/*Para el método get */
// La direccion es http://localhost:8080/usuario
// primer parámetro de app.get --> /usuario, es la dirección donde envío las cosas
// segundo parámetro de app.get --> función anónima donde recibo la consulta y envío la respuesta
app.get('/usuario', function(req,res){
  var nombre = req.query.nombre;
  var apellido = req.query.apellido;

  res.send('<p> Nombre: ' + nombre + ' </p><p> Apellido: ' + apellido + ' </p>');
});

// En postman, en key meteremos nombre y apellido, con minúsculas porque es como lo hemos definido
// Al darle a send, nos creará un html con la respuesta
// La dirección será http://localhost:8080/usuario?nombre=Juan&apellido=Palomo

/* Para el método post */
app.post('/usuario', function(req, res){
  var nombre = req.body.nombre;
  // En postman con url encoded en el body
  res.send('Insertar ' + nombre);
});

/* Conexión al servidor */
var server = app.listen(8080, function (){
  console.log('Servidor corriendo en 8080');
});
