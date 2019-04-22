Algoritmo Calculadoratotal
	Definir primernumero como cadena
	Escribir "Escribe el primer número"
	Leer primernumero
	cont<-Longitud(primernumero)
	cadena1<-SubCadena(primernumero,cont-1,cont)
	cont<-Longitud(cadena1)
	Repetir
		Escribir "Escribe un operador de entre los siguientes: +, -, /, *"
		Leer operador
		Escribir "Escribe el segundo número"
		Leer segundonumero
		Escribir primernumero operador segundonumero
		Si operador = "+" Entonces
			total<- primernumero+segundonumero
			Escribir "total = " total
		SiNo
			Si operador = "-" Entonces
				total<-primernumero-segundonumero
				Escribir "total = " total
			SiNo
				Si operador = "/" Entonces
					total<-primernumero/segundonumero
					Escribir "total = " total
				SiNo
					Si operador = "*" Entonces
						total<-primernumero*segundonumero
						Escribir "total = " total
					SiNo
						Escribir "Los datos introducidos no son correctos"
					Fin Si
				Fin Si
			Fin Si
		Fin Si
		primernumero<-total
	Hasta Que total=null
	
	
FinAlgoritmo
