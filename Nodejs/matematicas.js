function sumar(x,y){
  return x+y;
}
/*lo que devuelve hay que exportarlo para que al llamar a este módulo desde otro archivo, funcione*/
exports.sumar=sumar; /*IMPORTANTE: se exporta fuera de la función*/

function restar(x,y){
  return x-y;
}
exports.restar=restar;

function multiplicar(x,y){
  return x*y;
}
exports.multiplicar=multiplicar;

function dividir(x,y){
  if (y==0){
    return ("No se puede hacer")
  } else {
    return x/y;
  }
}
exports.dividir=dividir;
