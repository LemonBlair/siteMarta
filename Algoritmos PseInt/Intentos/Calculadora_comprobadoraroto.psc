Algoritmo Calculadoracomprobadoraroto
	//--Primer número--//
	Escribir "Introduzca el primer número"
	Leer primernumero
	Definir num Como Caracter
	num<- ConvertirATexto(primernumero)
	long<- Longitud(num)
	i<- 1
	Repetir
		Repetir
			//--Comprobar si el primer número es un número--//
			sub<-SubCadena(num,i,i)
			Si sub="0" O sub="1" O sub="2" O sub="3" O sub="4" O sub="5" O sub="6" O sub="7" O sub= "8" O sub="9" Entonces
				Escribir sub " es un número."
			SiNo
				Escribir sub " no es un número."
			Fin Si
			i=i+1
		Hasta Que i>long
		//--Operador--//
		Escribir "Elija un operador de entre los siguientes: + - * /"
		Leer operador
		op<- operador
		longop<- Longitud(op)
		ii<- 1
		Repetir
			//--Comprobar que es uno de los 4 caracteres permitidos--//
			subop<-Subcadena(op,ii,ii)
			Si subop="+" O subop="-" O subop="*" O subop="/" Entonces
				Escribir subop
			SiNo
				Escribir "El caracter introducido no es válido."
			FinSi
			ii=ii+1
		Hasta Que ii>longop
		
		//--Segundo número--//
		Escribir "Introduzca el segundo número"
		Leer segundonumero
		num2<- segundonumero
		long2<- Longitud(num2)
		iii<- 1
		Repetir
			//--Comprobar que el segundo número es un número--//
			sub2<-SubCadena(num2,iii,iii)
			Si sub2="0" O sub2="1" O sub2="2" O sub2="3" O sub2="4" O sub2="5" O sub2="6" O sub2="7" O sub2= "8" O sub2="9" Entonces
				Escribir sub2 " es un número."
			SiNo
				Escribir sub2 " no es un número."
			Fin Si
			iii=iii+1
		Hasta Que iii>long
		
		//--Visualizar la operación solicitada--//
		Escribir primernumero operador segundonumero "="
		
		//--Calculadora en sí--//
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
	