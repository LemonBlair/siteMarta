('use strict')
var mat = require("./matematicas.js"); /*introduce matematicas.js en la variable mat*/

var resultado = mat.sumar(3,7); /*como mat contiene la función sumar, llamo a uno de sus métodos (sumar) y le paso parámetros*/
var resultado2 = mat.restar(3,7);
var resultado3 = mat.multiplicar(3,7);
var resultado4 = mat.dividir(3,0);

console.log(resultado+" "+resultado2+" "+resultado3+" "+resultado4);
