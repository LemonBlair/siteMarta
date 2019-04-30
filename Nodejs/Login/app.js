'use strict'

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var bcrypt     = require('bcrypt');
var mongoose   = require('mongoose');

/* == Manejo de las URLs == */
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


/* == Conexión a la base de datos usuarios == */
mongoose.connect("mongodb://localhost/usuarios", {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.log.bind(console, 'No se ha podido conectar a la base de datos.'));
db.once('open', function(){
  console.log('Conectado a la base de datos de usuarios.');
});

/* == Esquema de los datos == */
var usuarioSchema = new mongoose.Schema({
  Nombre: String,
  Email: String,
  Password: String,
  Confirmado: String
});

/* == Modelo de los datos, colección a la que los enviamos == */
var usuario = mongoose.model('usuarios', usuarioSchema);

/* == Manejo de peticiones y emisión de respuesta == */

app.post("/login", function(req, res){
  var password = req.body.password;
  /* == Encriptado == */
  var salt = bcrypt.genSaltSync();                                              //Veces que lo encriptamos. Por defecto, si vacío, se encripta 10 veces.
  var encryptedPassword = bcrypt.hashSync(password, salt);
  var nuevoUsuario = new usuario({
    Nombre: req.body.nombre,
    Email: req.body.email,
    Password: encryptedPassword,
    Confirmado: 'no'
  });

  usuario.findOne({Email: req.body.email}, function(error, encontrado){
    if(error){
      nuevoUsuario.save(function(error, usuario){
        if(error){return res.send('Error interno. El registro no ha podido realizarse.');}
        if(usuario){
    /* Email desde el cual enviamos el correo: servicio, cuenta y password */
          var transporte = nodemailer.createTransport({
            service: "Hotmail",
            auth: {
              user: 'juan.frontend@hotmail.com',
              pass: '1POTORRO1924'
            }
          });

          /* Contenido del mensaje que enviamos. Podría ser texto plano o html */
          var mensaje  = "Correo de verificación";
          /* El enlace será un update de la base de datos que no va por put, sino por get */
          var enlace   = "<a href='http://localhost:8080/confirmar?email=" + req.body.email + "'>Activar aquí</a>";

          var opciones = {
            from: 'juan.frontend@hotmail.com',
            to: req.body.email,
            subject: 'Correo de confirmación',
            text: mensaje,
            html: enlace
          }

          transporte.sendMail(opciones, function(error, info){
            if(error) { console.log(error); }
            else{ console.log('Se ha enviado el email de confirmación.' + info.response); }
          });

          return res.send('Se ha creado un nuevo usuario.');
        }
      });
    }
    if (encontrado){res.send('El usuario ya existe');}
  });

});

/* == Confirmado del email == */
app.get('/confirmar', function(req,res){
  usuario.updateOne({Email: req.query.email}, {Confirmado: 'si'}, function(err, hecho){
    if(err) return res.send('Error al confirmar.');
    if(hecho) return res.send('Email confirmado.');
  });
});


/* == Comprobación en el inicio de sesión == */
app.get('/login', function (req, res){
  usuario.findOne({Nombre: req.query.nombre}, function(err, user){
    if (user) {
      if(bcrypt.compareSync(req.query.password, user.Password)){                // devuelve un true si son iguales, un false si no lo son
        if(user.confirmado === 'no') {res.send('Correo no confirmado');} else{res.send('Se ha conectado.');}
      }
      else{
        res.send('Contraseña incorrecta');
      }
    }
    else{
      res.send('El usuario no existe.');
    }
  });
});


var server = app.listen(8080, function(){
  console.log('Servidor corriendo en el puerto 8080.');
});
