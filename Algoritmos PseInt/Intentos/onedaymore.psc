Algoritmo x
	var<-0
	Repetir
		Escribir "Introduzca un número:"
		Leer primernumero
		long<-Longitud(primernumero)
		i<-1
		error<-0
		Repetir
			sub<-SubCadena(primernumero,i,i)
			Si sub<>"0" Y sub<>"1" Y sub<>"2" Y sub<>"3" Y sub<>"4" Y sub<>"5" Y sub<>"6" Y sub<>"7" Y sub<>"8" Y sub<>"9" Entonces
				Escribir "El caracter " i " es incorrecto."
				var<-1
				error<-1
			SiNo
				Escribir sub " es un número."
			FinSi
			i=i+1
		Hasta Que i>long O error=1
	Hasta Que error=0
	num1<-ConvertirANumero(primernumero)
	Escribir "El primer número es: " num1
	
	Escribir "Escoja un operador de entre los siguientes: + - / *:"
	Repetir
		Leer operador
		longop<-Longitud(operador)
		correcto2<-0
		Si longop=1 Entonces
			Repetir
				subop<-Subcadena(operador, 1,1)
				Si sub="+" O sub="-" O sub="*" O sub="/" Entonces
					Escribir "No se ha escogido ninguno de los operadores permitidos."
					var<-1
				SiNo
					op<- operador
					correcto2<-1
					Escribir subop " es un operador permitido."
				FinSi
				i=i+1
			Hasta Que i>longop 
		SiNo
			Escribir "Hay más de un operador. Escoja un operador de entre los siguientes: + - / *:"
		FinSi
	Hasta Que correcto2=1
	Escribir "El operador seleccionado es: " op
	
	
	Repetir
		Escribir "Introduzca otro número:"
		Leer segundonumero
		long2<-Longitud(segundonumero)
		ii<-1
		error<-0
		Repetir
			sub<-SubCadena(segundonumero,ii,ii)
			Si sub<>"0" Y sub<>"1" Y sub<>"2" Y sub<>"3" Y sub<>"4" Y sub<>"5" Y sub<>"6" Y sub<>"7" Y sub<>"8" Y sub<>"9" Entonces
				Escribir "El caracter " i " es incorrecto."
				var<-1
				error<-1
			SiNo
				num2<-ConvertirANumero(segundonumero)
				Escribir sub " es un número."
			FinSi
			ii=ii+1
		Hasta Que i>long
	Hasta Que error=0
	Escribir "El primer número es: " num2
	
	Si var=0 Entonces
		Si op="+" Entonces
			total<-num1+num2
			Escribir "Total = " total
		SiNo
			Si op="-" Entonces
				total<-num1-num2
				Escribir "Total = " total
			SiNo 
				Si op="*" Entonces
					total<-num1*num2
					Escribir "Total = " total
				SiNo
					Si op="/" Entonces
						total<-num1/num2
						Escribir "Total = " total
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinAlgoritmo
