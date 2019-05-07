/*'use-strict'*/

/* Nuevo módulo a instalar:
 * express-session --> permite controlar si un usuario ha iniciado sesión y mantenerla
 * abierta mientras el usuario esté conectado
 */

 var express = require('express');
 var app = express();
 app.use(express.static('public'));

 var bodyParser = require('body-parser');
 /* Parsea los datos que vengan del body del html a json*/
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));

 var mongoose = require('mongoose');

 var sesion = require('express-session');
 app.use(sesion({secret: "123456", resave: true, saveUninitialized: true}));
/* secret --> clave que utilizaremos para encriptar la sesión
 * resave: acreditación, ¿es el usuario quien dice ser? Por default, pondremos false
 * saveUninitialized --> autorización, permisos, a qué tiene acceso el usuarios. Por default, pondremos false
 */


app.post('/login', function(req, res){
  /* la variable req.session (IMPORTANTE, CON DOS S, NO ES LA SESION QUE DEFINIMOS NOSOTROS)
   * esta definida en el módulo, por eso no tengo que poner var delante*/
  req.session.nombre = req.body.nombre;
  req.session.email = req.body.email;
  req.session.password = req.body.password;
  console.log(req.session);
  if(res) return res.send("El nombre del usuario es " + req.session.nombre);
});


app.post('/logout', function(req, res){
  if(res) {
    req.session.destroy();
    console.log(req.session);
    res.send("Se ha cerrado sesión");
  }
});

app.get('/sesion', function(req,res){
  if (req.session.nombre !== undefined) {return res.send("Sesión iniciada: " + req.session.nombre);}
  else {return res.send("No se ha iniciado sesión");}
});

/* Conexión a la base de datos */
 var db = mongoose.connection;
 mongoose.connect('mongodb://localhost/usuarios', {useNewUrlParser: true});
 db.on('error', console.log.bind(console, 'Connection error'));
 db.once('open', function(){
   console.log('Conectado a la base de datos de usuarios.');
 });











 var server = app.listen(8080, function(){
   console.log("Servidor corriendo en el puerto 8080");
 });
