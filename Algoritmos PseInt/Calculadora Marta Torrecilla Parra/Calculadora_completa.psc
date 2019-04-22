// Este algoritmo funciona como una calculadora. 
// 1. Va pidiendo al usuario los componentes de las operaciones de uno en uno:
// un primer n�mero, un operador y un segundo n�mero.
// Ej: >Introduzca un n�mero:
// >12
// >Escoja un operador de entre los siguientes: + - / *:
// >+
// >Introduzca otro n�mero:
// >13
// 2. Comprueba que cada dato introducido por el usuario sea lo que debe ser, es decir, 
// en el caso de los n�meros, que todos los caracteres sean num�ricos, y en el caso del operador, 
// que sea uno de los 4 permitidos. Si no son correctos, los vuelve a pedir.
// Ej: >Introduzca un n�mero:
// >12j
// >1 es un n�mero.
// >2 es un n�mero.
// >El caracter 3 es incorrecto.
// >Introduzca un n�mero:
// 3. Realiza cuatro operaciones: suma, resta, multiplicaci�n y divisi�n. Devuelve el resultado como:
// Ej:	>Total =  15
// 4. La divisi�n por 0 no es posible. Si el segundo n�mero es 0, vuelve a pedirlo.
// 5. Guarda el resultado de la operaci�n como primer n�mero para poder seguir operando con �l.

Algoritmo Calculadora
	//Variable booleana que "apaga" o "enciende" la calculadora en caso de error.//
	var <- 0
	Repetir
		// Se pide el primer n�mero al usuario.//
		Escribir 'Introduzca un n�mero:'
		Leer primernumero
		long <- Longitud(primernumero)
		i <- 1
		error <- 0
		// Comprobaci�n del primer n�mero.//
		Repetir
			sub <- SubCadena(primernumero,i,i)
			Si sub<>'0' Y sub<>'1' Y sub<>'2' Y sub<>'3' Y sub<>'4' Y sub<>'5' Y sub<>'6' Y sub<>'7' Y sub<>'8' Y sub<>'9' Entonces
				Escribir 'El caracter ',i,' es incorrecto.'
				var <- 1
				error <- 1
			SiNo
				Escribir sub,' es un n�mero.'
			FinSi
			i <- i+1
		Hasta Que i>long O error=1
	Hasta Que error=0
	var <- 0
	// Almacenamos el n�mero una vez comprobamos que no se ha colado ning�n otro caracter.//
	num1 <- ConvertirANumero(primernumero)
	Escribir 'El primer n�mero es: ',num1
	Repetir
		// Se pide el operador entre 4 opciones. Solo admitir� un operador.//
		Escribir 'Escoja un operador de entre los siguientes: + - / *:'
		Repetir
			Leer operador
			longop <- Longitud(operador)
			correcto2 <- 0
			// Si solo hay un operador, se pasa a ver si est� entre los permitidos.//
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
				Escribir 'Hay m�s de un operador. Escoja un operador de entre los siguientes: + - / *:'
			FinSi
		Hasta Que correcto2=1
		var <- 0
		Escribir 'El operador seleccionado es: ',op
		Repetir
			// Se pide el segundo n�mero al usuario.//
			Escribir 'Introduzca otro n�mero:'
			Leer segundonumero
			long2 <- Longitud(segundonumero)
			ii <- 1
			error <- 0
			// Comprobaci�n del segundo n�mero.//
			Repetir
				sub <- SubCadena(segundonumero,ii,ii)
				Si sub<>'0' Y sub<>'1' Y sub<>'2' Y sub<>'3' Y sub<>'4' Y sub<>'5' Y sub<>'6' Y sub<>'7' Y sub<>'8' Y sub<>'9' Entonces
					Escribir 'El caracter ',ii,' es incorrecto.'
					var <- 1
					error <- 1
				SiNo
					// Error espec�fico si se intenta dividir por 0.//
					Si sub='0' Entonces
						Escribir 'La divisi�n por 0 no es posible.'
						error <- 1
					SiNo
						Escribir sub,' es un n�mero.'
					FinSi
				FinSi
				ii <- ii+1
			Hasta Que ii>long2 O error=1
		Hasta Que error=0
		// Almacenamos el segundo n�mero una vez que hemos comprobado que es correcto.//
		num2 <- ConvertirANumero(segundonumero)
		var <- 0
		Escribir 'El segundo n�mero es: ',num2
		// Si no hay ning�n error, se procede a las operaciones.//
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
					// Multiplicaci�n//
					Si op='*' Entonces
						total <- num1*num2
						Escribir 'Total = ',total
					SiNo
						// Divisi�n//
						Si op='/' Entonces
							total <- num1/num2
							Escribir 'Total = ',total
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
		// Guardamos el resultado de la operaci�n en el primer n�mero para poder seguir realizando c�lculos con �l.//
		num1 <- total
	Hasta Que total=null
FinAlgoritmo

