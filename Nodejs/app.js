/* -- SERVIDOR recibe por POST y envía por GET */

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
/* urlencoded() sirve para acceder a la url que vamos a solicitar */
/* extended:false sirve para que solo parsee las cadenas de texto */
app.use(bodyParser.urlencoded({extended:false}));
/* post() es un método de express que nos dice que vamos a recibir parámetros por método post */
/* El primer parámetro es el nombre clave de los datos en el action del form */
/* El segundo parámetro es lo que hagamos con los datos recibidos */

app.get("/mostrartabla", function (req, res) {
  var numero = req.query.valor;
  var pagina = "<!DOCTYPE html><head></head><body>";
  for (var i=0; i<=10; i++){
    pagina=pagina+"<p>"+numero+"x"+i+"="+ (numero*i) + "</p><br>";
  }
  pagina = pagina + "</body></html>";
  res.send(pagina);
});

app.post("/mostrarnumeros", function(req, res){
  /* Los datos llegan en req a través del body porque los estamos pasando por post */
  var numero1 = req.body.num1;
  var numero2 = req.body.num2;
  var numMax = Math.max(numero1, numero2);
  var numMin = Math.min(numero1, numero2);
  /* Principio de la página */
  var pagina = "<!DOCTYPE html><head></head><body>";
  /* Añadimos el contenido que queramos añadir */
  //pagina = pagina + "<p>El numero más grande es " + numero2 + ".</p>";
  //pagina = pagina + "<p>El numero más pequeño es " + numero1 + ".</p>";

  /* Versión Arturo */
  /*pagina = pagina + "<p> Los números son " + numMin;

  for (a=1; a<=numMax-numMin; a++){
    pagina = pagina + "," + (numMin+a);
  }*/

  /* Mi version */
  pagina = pagina + "<p> Los números son: ";
  for (a=numMin; a<=numMax; a++){
    pagina = pagina + " | " + "<a href='/mostrartabla?valor=" + a + "'>" + a + "</a>";
  }
  /* Añadimos el final de la página */
  pagina = pagina + "</body></html>";
  /* res es lo que enviamos de vuelta */
  res.send(pagina);
});

var server = app.listen(8888, function(){
  console.log("servidor corriendo en el puerto 8888");
});
