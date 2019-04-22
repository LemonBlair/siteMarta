'use strict'

var http = require('http');
var servidor = http.createServer( (peticion, respuesta) /*convencionalmente, req y res */ => {
  respuesta.writeHead(200,{'content-type':'text/html'});
  /*res.writeHead(codigo de estado (200 = guay, si no está correcto, no envia el codigo 200. No es algo que tú le pongas por defecto),
   archivo json);*/
  respuesta.write("<h1>Hola Mundo</h1>");
  respuesta.end(); /*Cerrar conexión con el servidor*/
});
/* Llamar al puerto donde vamos a comunicarnos */
servidor.listen(8888);
console.log('Servidor corriendo en el puerto 8888');
 /*al abrir en el navegador el localhost:8888 se vera el html que le hemos enviado*/
