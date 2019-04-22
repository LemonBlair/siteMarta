'use strict'

/* NOTA --> métodos en azul*/

/* Conexión a la base de datos*/
var mongoose = require('mongoose');

/* Definir parámetros de la conexión --> ('mongodb: localhost/nombredelabasededatos', {parsear bson a binario})*/
/* Si no usamos puerto por defecto, después de localhost iría el numero del puerto*/
/* Si necesitaramos acceder a la base de datos con usuario y contraseña, sería mongodb:nombre@contraseña */
mongoose.connect('mongodb://localhost/Usuarios', {useNewUrlParser:true});

/* Variable para almacenar la conexión, la utilizamos para conectarnos */
var db = mongoose.connection;
db.on('error', console.error.bind(console,'Error de conexión')); /*Si hay error de conexión, que nos muestre el mensaje "Error de conexión"*/
/*Solo comprueba conexión una vez. Si puede conectar, debe escribir 'Conectado a la base de datos' */
db.once('open', function (){
  console.log('Conectado a la base de datos.')
});

/* Esquemas y modelos de mongoose */

/*El esquema define cómo tiene que ser los datos dentro de MongoDB, como la longitud del password*/

var UsuariosSchema = new mongoose.Schema(
{Nombre:String,
Password:String
});

/*El modelo es algo que usamos cuando la estructura es repetitiva y vamos a usarla muchas veces */

/* mongoose.model('nombredelacoleccion', Esquemadelosdatos) */
/* IMPORTANTE -- colecciones en MINUSCULA y en plural*/
var usuario = mongoose.model('animales', UsuariosSchema);
/* new usuario se refiere a la variable usuario de la línea de arriba, la estamos convirtiendo en una 'clase' de la cual creamos 'objetos' o 'instancias'*/
/* new usuario va a ser una consulta que tiene que tener la estructura definida en la variable usuario */
var nuevoUsuario = new usuario(
  {Nombre:"Perro",
  Password:"Guau"
});

console.log(nuevoUsuario.Password);
nuevoUsuario.save(function(err, nuevoUsuario){
  if (err) return console.log('Error al introducir el dato en la base de datos');
});

/* Hasta aquí, la base de datos no ha guardado el nuevoUsuario, solo nos lo muestra porque está en script */

/* En una base de datos se pueden realizar cuatro tipos de consultas:
 * Consultar
 * Insertar
 * Actualizar
 * Borrar
 */

 /* Buscar documentos dentro de la base 'Usuarios' */

 usuario.find(function(err, usuario){
   if (err) return console.log('Error');
   console.log(usuario);
 });
