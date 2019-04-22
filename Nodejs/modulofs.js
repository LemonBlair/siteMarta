'use strict'
var fs = require("fs");
/*fs.writeFile("nombre.txt","contenido", error); */ /*Error es lo que tiene que hacer cuando no pueda escribir el archivo. Será una función anónima. Lo explica mañana (maybe).*/
/* FORMA 1 */
fs.writeFile("./archivo.txt", "¿Quién vive en la piña debajo del mar?", function (error) {
                                                                                        if (error){
                                                                                          console.log("Error");
                                                                                        } else {
                                                                                          console.log("Archivo creado");
                                                                                        }
                                                                                      });
console.log("Última línea de código");
/* Función anónima para que la programación sea asíncrona. Debe comprobar si hay alguna clase de error
 * Al ser anonima, no espera a que se termine el proceso, por eso se escribe primero "Ultima linea de codigo" y no Archivo creado*/
/* El tercer argumento de la funcion writeFile devuelve true or false (error). Si es true, hay un error.*/

/* FORMA 2 */
/*En lugar de function (error) se pone error => (arrow function para denominar los callbacks, lo que devuelve la función)*/
