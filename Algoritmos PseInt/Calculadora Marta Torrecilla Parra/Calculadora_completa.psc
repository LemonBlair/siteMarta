// Este algoritmo funciona como una calculadora. 
// 1. Va pidiendo al usuario los componentes de las operaciones de uno en uno:
// un primer número, un operador y un segundo número.
// Ej: >Introduzca un número:
// >12
// >Escoja un operador de entre los siguientes: + - / *:
// >+
// >Introduzca otro número:
// >13
// 2. Comprueba que cada dato introducido por el usuario sea lo que debe ser, es decir, 
// en el caso de los números, que todos los caracteres sean numéricos, y en el caso del operador, 
// que sea uno de los 4 permitidos. Si no son correctos, los vuelve a pedir.
// Ej: >Introduzca un número:
// >12j
// >1 es un número.
// >2 es un número.
// >El caracter 3 es incorrecto.
// >Introduzca un número:
// 3. Realiza cuatro operaciones: suma, resta, multiplicación y división. Devuelve el resultado como:
// Ej:	>Total =  15
// 4. La división por 0 no es posible. Si el segundo número es 0, vuelve a pedirlo.
// 5. Guarda el resultado de la operación como primer número para poder seguir operando con él.

Algoritmo Calculadora
	//Variable booleana que "apaga" o "enciende" la calculadora en caso de error.//
	var <- 0
	Repetir
		// Se pide el primer número al usuario.//
		Escribir 'Introduzca un número:'
		Leer primernumero
		long <- Longitud(primernumero)
		i <- 1
		error <- 0
		// Comprobación del primer número.//
		Repetir
			sub <- SubCadena(primernumero,i,i)
			Si sub<>'0' Y sub<>'1' Y sub<>'2' Y sub<>'3' Y sub<>'4' Y sub<>'5' Y sub<>'6' Y sub<>'7' Y sub<>'8' Y sub<>'9' Entonces
				Escribir 'El caracter ',i,' es incorrecto.'
				var <- 1
				error <- 1
			SiNo
				Escribir sub,' es un número.'
			FinSi
			i <- i+1
		Hasta Que i>long O error=1
	Hasta Que error=0
	var <- 0
	// Almacenamos el número una vez comprobamos que no se ha colado ningún otro caracter.//
	num1 <- ConvertirANumero(primernumero)
	Escribir 'El primer número es: ',num1
	Repetir
		// Se pide el operador entre 4 opciones. Solo admitirá un operador.//
		Escribir 'Escoja un operador de entre los siguientes: + - / *:'
		Repetir
			Leer operador
			longop <- Longitud(operador)
			correcto2 <- 0
			// Si solo hay un operador, se pasa a ver si está entre los permitidos.//
			Si longop=1 Entonces
				subop <- SubCadena(operador,1,1)
				Si subop='+' O subop='-' O subop='*' O subop='/' Entonces
					// Almacenamos el operador.//
					op <- operador
					correcto2 <- 1
					Escribir subop,' es un operador permitido.'
				SiNo
					Escribir 'No se ha escogido ninguno de los operadores permitidos.'
					Escribir 'Escoja un operador de entre los siguientes: + - / *:'
					var <- 1
				FinSi
			SiNo
				Escribir 'Hay más de un operador. Escoja un operador de entre los siguientes: + - / *:'
			FinSi
		Hasta Que correcto2=1
		var <- 0
		Escribir 'El operador seleccionado es: ',op
		Repetir
			// Se pide el segundo número al usuario.//
			Escribir 'Introduzca otro número:'
			Leer segundonumero
			long2 <- Longitud(segundonumero)
			ii <- 1
			error <- 0
			// Comprobación del segundo número.//
			Repetir
				sub <- SubCadena(segundonumero,ii,ii)
				Si sub<>'0' Y sub<>'1' Y sub<>'2' Y sub<>'3' Y sub<>'4' Y sub<>'5' Y sub<>'6' Y sub<>'7' Y sub<>'8' Y sub<>'9' Entonces
					Escribir 'El caracter ',ii,' es incorrecto.'
					var <- 1
					error <- 1
				SiNo
					// Error específico si se intenta dividir por 0.//
					Si sub='0' Entonces
						Escribir 'La división por 0 no es posible.'
						error <- 1
					SiNo
						Escribir sub,' es un número.'
					FinSi
				FinSi
				ii <- ii+1
			Hasta Que ii>long2 O error=1
		Hasta Que error=0
		// Almacenamos el segundo número una vez que hemos comprobado que es correcto.//
		num2 <- ConvertirANumero(segundonumero)
		var <- 0
		Escribir 'El segundo número es: ',num2
		// Si no hay ningún error, se procede a las operaciones.//
		Si var=0 Entonces
			// Suma//
			Si op='+' Entonces
				total <- num1+num2
				Escribir 'Total = ',total
			SiNo
				// Resta//
				Si op='-' Entonces
					total <- num1-num2
					Escribir 'Total = ',total
				SiNo
					// Multiplicación//
					Si op='*' Entonces
						total <- num1*num2
						Escribir 'Total = ',total
					SiNo
						// División//
						Si op='/' Entonces
							total <- num1/num2
							Escribir 'Total = ',total
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
		// Guardamos el resultado de la operación en el primer número para poder seguir realizando cálculos con él.//
		num1 <- total
	Hasta Que total=null
FinAlgoritmo

