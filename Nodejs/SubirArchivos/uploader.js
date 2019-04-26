'use strict'

const express = require("express");
// npm install --save express-fileupload
const fileUpload = require("express-fileUpload");
// npm install --save multer

const app = express();

app.use(fileUpload());
app.use(express.static("public"));



app.post("/upload", function(req, res)
{
  // Al enviar un archivo en una petición, se introduce en la propiedad files
  var archivo = req.files.file;

  /**
   * El método mv es para guardar el archivo.
   * El primer parámetro es la ruta del directorio en el que guardarlo más el nombre del archivo
   * (por tanto, el nombre puede ser el que nosotros queramos).
   * .name es la propiedad que almacena el nombre con el que viene el archivo originalmente.
   */
  archivo.mv("./public/Images/" + req.body.nombre + ".jpg", function(error)
  {
    if (error) { return res.send("No se ha podido guardar el archivo.") }
    else       { return res.send("El archivo se ha guardado correctamente.") }
  });
});



app.listen(8080, function()
{
  console.log("Servidor corriendo en el puerto 8080.");
});
