'use strict'

const express = require('express');

var app = express();

app.use(express.static(__dirname +'/Recursos'));

/* app, usa (.use) el método static (express.static) de express para acceder al directorio cuyo nombre es 'Recursos' */

var server = app.listen(8888, function(){
  console.log('Servidor corriendo en el puerto 8888');
});

/*Al abrir el puerto 8888, se verá el index.html que esté dentro de la carpeta. SOLO ABRE index.html */
