/* Paquetes o módulos que voy a usar */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/* Tratamiento de las urls */
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public'));          // Para poder mandar a prueba.html el resultado de la búsqueda

/*Lo que sería la aplicación */

//Conexión a la base de datos 'Usuarios'
mongoose.connect('mongodb://localhost/Usuarios', {useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console,'Error de conexión'));
db.once('open', function (){
  console.log('Conectado a la base de datos.')
});

// El esquema de los elementos que se encuentran en la base de datos
var UsuariosSchema = new mongoose.Schema(
{Nombre:String,
Password:String
});

// El modelo de la base de datos
var usuario = mongoose.model('animales', UsuariosSchema);

/*Para el método get */
// La direccion es http://localhost:8080/usuario
// primer parámetro de app.get --> /usuario, es la dirección donde envío las cosas
// segundo parámetro de app.get --> función anónima donde recibo la consulta y envío la respuesta

app.get('/usuario', function(req,res){

// el nombre del usuario que metemos en postman (en la url) para que lo encuentre en la base de datos
// podría mandarlo abriendo chrome y escribiendo http://localhost:8080/usuario?nombre=Gato (la query con ?)
  var nombre = req.query.nombre;
// Con el método findOne, le pido que busque en la base de datos con el criterio que le pido y me devuelve la PRIMERA entrada entera
  usuario.findOne({ Nombre: nombre }, function (err, usuario) {
    if (err) return console.log('Error');
    if (usuario == null) {return console.log('El usuario no existe.')};
    if (!nombre) {return console.log('No se ha introducido un criterio de búsqueda.');}
    console.log(usuario);
    res.send('<p> Nombre: ' + usuario.Nombre + ' </p><p> Password: ' + usuario.Password + ' </p>');
    /* usuario.Nombre extrae el nombre del usuario encontrado. Es importante que Nombre esté en mayúsculas
     * porque así es como está en la base de datos */
  });

});


/* Conexión al servidor */
var server = app.listen(8080, function (){
  console.log('Servidor corriendo en 8080');
});
