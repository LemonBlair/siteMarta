'use-strict'

/* Módulos de nodejs que hay que instalar:

 * express
 * express-fileUpload
 * bodyParser
 * mongoose
 * multer
 * Opcional: nodemon
 
 */


var express = require('express');
var app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var mongoose = require('mongoose');

/* Conexión a la base de datos*/
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/gatitos', {useNewUrlParser: true});
db.on('error', console.log.bind(console, 'Connection error'));
db.once('open', function(){
  console.log('Conectado a la base de datos de gatitos. ¡Miau!');
});

/* Esquema de cada entrada */
var gatitoSchema = new mongoose.Schema({
  Nombre: String,
  Color: String,
  Imagen: String,
  Habilidad: String
});

/* Modelo de cada entrada */
var gatito = mongoose.model('gatitos', gatitoSchema);

/* Esquema para la búsqueda por color */
var colorSchema = new mongoose.Schema({
  Color: String
});

/* Modelo para la búsqueda por color */
var color = mongoose.model('colores', colorSchema);

/* Esquema para la búsqueda por nombre */
var nombreSchema = new mongoose.Schema({
  Nombre: String
});

/* Modelo para la búsqueda por nombre */
var nombre = mongoose.model('nombres', nombreSchema);

/* ==== Peticiones por GET ==== consultar en las bases de datos ==== */

/* Listado de colores de la base de datos 'colores' */
app.get('/colores', function(req, res){
  color.find({}, function(error, datos){
    console.log(datos);
    res.send(datos);
  });
});

/* Listado de nombres de la base de datos 'nombres' */
app.get('/nombres', function(req, res){
  nombre.find({}, function(error, datos){
    console.log(datos);
    res.send(datos);
  });
});

/* Entradas existentes en la base de datos 'gatitos' con el color seleccionado */

app.get('/seleccion', function(req, res){
  gatito.find({Color:req.query.color}, function(error, datos){
    res.send(datos);
  });
});

/* Entradas existentes en la base de datos 'gatitos' con el nombre seleccionado */

app.get('/seleccion2', function(req, res){
  console.log(req.query.nombre);
  gatito.find({Nombre:req.query.nombre}, function(error, datos){
    res.send(datos);
  });
});

/* ==== Peticiones por POST ==== insertar entradas en las bases de datos ==== */

app.post('/seleccion', function(req, res){
  /* Primero compruebo que el color no sea nuevo. Si lo es, lo añado a la base colores */
  color.findOne({Color:req.body.color}, function (err, datos){
    if(datos===null){
      var nuevoColor = new color({Color:req.body.color});
      nuevoColor.save(function (err, hecho){});
    }
  });
  nombre.findOne({Nombre:req.body.nombre}, function (err, datos){
    if(datos===null){
      var nuevoNombre = new nombre({Nombre:req.body.nombre});
      nuevoNombre.save(function (err, hecho){});
    }
  });

  console.log(req.body.nombre);
  var nuevoGatito = new gatito({Nombre: req.body.nombre,
                                  Color: req.body.color,
                                  Imagen: req.body.imagen,
                                  Habilidad: req.body.habilidad
                                });
  nuevoGatito.save(function(err, gatito){
    if(err) return res.send("Ha ocurrido un error al añadir tu nuevo gatito. Miaula suerte.");
    if (gatito) return res.send("¡Se ha añadido un nuevo gatito!");
  });
});

/* ==== Peticiones por PUT ==== actualizar entradas preexistentes ==== */
app.put('/seleccion', function(req, res){
/* Si el color con el que hemos enviado el gatito editado no estaba en la
 * base de datos, lo añadimos a la base de datos 'colores'
 */
  color.findOne({Color:req.body.color}, function (err, datos){
    if(datos===null){
      var nuevoColor = new color({Color:req.body.color});
      nuevoColor.save(function (err, hecho){});
    }
  });

  //primero: el elemento a editar, aquel que tenga la id enviada por el body en método put
  //segundo: lo que vamos a editar, el nuevo contenido
  gatito.updateOne({_id: req.body.id}, {Nombre:req.body.nombre,
                                         Color: req.body.color,
                                         Imagen: req.body.imagen,
                                         Habilidad: req.body.habilidad}, function(err, editado){
                                           if (err) {return res.send('No se ha podido editar este gatito. Miaula suerte.');}
                                           if (editado) {return res.send('¡Gatito actualizado! (A mejor, espero)');}
                                         });
});

/* ==== Peticiones por DELETE ==== Elimina entradas preexistentes */
app.delete('/seleccion', function(req, res){

  gatito.deleteOne({_id: req.query.id}, function(err, eliminado){
    if(err) {return res.send('No se ha podido eliminar este gatito. Miaula suerte.');}
    if(eliminado) {return res.send('Gatito eliminado. (T_T)');}
  });
});



/* ==== Uploader - La petición viene por POST ==== */

const fileUpload = require("express-fileUpload");
app.use(fileUpload());

app.post("/upload", function(req, res)
{
  // Al enviar un archivo en una petición, se introduce en la propiedad files
  var archivo = req.files.file;

  archivo.mv("./public/Images/" + req.body.nombre + ".jpg", function(error)
  {
    if (error) { return res.send("No se ha podido guardar el archivo.") }
    else       { return res.send("El archivo se ha guardado correctamente.") }
  });
});


/* Conexión al servidor */

var server = app.listen(8080, function()
{
  console.log("Servidor corriendo en el puerto 8080");
});
