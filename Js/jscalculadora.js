/* Variables globales */
var numero="";  /* Variable donde se almacena el numero introducido por el usuario */
var operador="";  /* Variable que almacena el operador*/
var resultado=""; /* Variable que almacena el primer numero introducido una vez seleccionado operador*/
var pantalla; /* Fragmento de código redundante, hace que el input type text del html sea un "objeto" */
pantalla = document.getElementById("campo");
var interruptor=true; /* Interruptor de la función calcular() */
var intasignar=true; /* Interruptor de la funcion asignar() */
var intoperador=false; /* Interruptor de la funcion seleccionarOperador */


/* Funciones */

/* Funcion asignar */
    /* Captura el número que utilizaremos para las operaciones.
    Tiene un interruptor que evita que se puedan añadir números al resultado de
    la operación realizada anteriormente. Muestra el número en pantalla. */

function asignar(dato){
  if(intasignar==true){
    numero=numero+dato;
    pantalla.value=numero;
  }
}

/* Funcion reset */
    /* Vacía las variables numero, operador y resultado. Resetea los interruptores
    a su valor por defecto. Muestra en la pantalla el valor por defecto "0" */

function reset(borrar){
  numero="";
  operador="";
  resultado="";
  interruptor=true;
  intasignar=true;
  intoperador=false;
  pantalla.value="0";
}

/* Funcion seleccionarOperador */
    /* Guarda el operador. Tiene un interruptor que permite no guardar el numero anterior
    al operador en la variable resultado ni resetear el numero HASTA QUE se haya
    elegido un operador en concreto. Reactiva el interruptor que permite escribir
    números y activa el de la funcion calcular. */

function seleccionarOperador(simbolo){
    operador=simbolo;
    if (intoperador==false){
      resultado=numero;
      numero="";
      intoperador=true;
    }
    pantalla.value=resultado+operador;
    interruptor=true;
    intasignar=true;
}

/* funcion calcular */
    /*Permite realizar las operaciones en funcion del operador seleccionado.
    Funciona con condicionales. Resetea el interruptor de la funcion asignar y
    el de la funcion seleccionarOperador. Pasa los numeros a float
    (permite decimales) y realiza las operaciones. Almacena el resultado como primer
    numero para las siguientes operaciones. En el caso de la division, si el
    segundo numero es un 0, vuelve a pedir el segundo numero, mostrando antes un
    mensaje de error. */

function calcular(){
  intasignar=false;
  intoperador=false;
  if(interruptor==true){
    resultado=parseFloat(resultado);
    numero=parseFloat(numero);
    var valor;
    if (operador=="+"){
      valor=resultado+numero;
      numero=valor;
      pantalla.value=valor;
      interruptor=false;
    } else if (operador=="-"){
      valor=resultado-numero;
      numero=valor;
      pantalla.value=valor;
      interruptor=false;
    } else if (operador=="/"){
        if (numero==0){
          pantalla.value="invalid operation";
          numero="";
          intasignar=true;
          } else {
            valor=resultado/numero;
            numero=valor;
            interruptor=false;
            pantalla.value=valor;
          }
    } else if (operador=="*")
      {
      valor=resultado*numero;
      numero=valor;
      pantalla.value=valor;
      interruptor=false;
    } else if (operador=="xn")
      {
        valor=Math.pow(resultado, numero);
        numero=valor;
        pantalla.value=valor;
        interruptor=false;
    } else if (operador=="rn")
      {
        /* La precisión de los decimales en js es limitada. Los números
        periódicos no son calculables al 100% con js. Habrá raíces que no darán
        exactas porque no puede calcularlas. No te ralles. */
        valor=Math.pow(resultado, 1/numero);
        numero=valor;
        pantalla.value=valor;
        interruptor=false;
      }
  }
}

/* funcion OperacionesComplejas */

function OperacionesComplejas(potencia, elevador){
  var potencia;
  resultado=numero;
  var valor;
  if (potencia=="log")
  {
    valor=Math.log10(resultado);
    pantalla.value=valor;
    numero=valor;
  } if (potencia=="ln")
    {
      valor=Math.log(resultado);
      pantalla.value=valor;
      numero=valor;
    } if (potencia=="x2")
      {
      valor=Math.pow(resultado, 2);
      pantalla.value=valor;
      numero=valor;
      } if (potencia=="10ele")
        {
          valor=Math.pow(10,resultado);
          pantalla.value="10^"+resultado+"="+valor;
          numero=valor;
        } if (potencia=="r2")
          {
            valor=Math.sqrt(resultado);
            pantalla.value=valor;
            numero=valor;
          }
}
