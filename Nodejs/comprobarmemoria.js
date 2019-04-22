
var os = require("os");
console.log("La memoria RAM libre del sistema antes del array es", os.freemem());

var array= new Array();
for (i=0; i<=10000000;i++){
  array[i]=i;
}
/*Si pones un cero más en la i, peta xP */
console.log("La memoria RAM libre del sistema después del array es", os.freemem());
