Algoritmo registro
	Escribir "Escribe tu usuario"
	Leer usuario
	u<- usuario
	Escribir "Escribe tu contrase�a"
	Leer contrase�a
	c<- contrase�a
	Si Longitud(c)<6 Entonces
		Repetir
			Escribir "La contrase�a debe tener 6 o m�s caracteres."
			Escribir "Escribe una nueva contrase�a"
			Leer contrase�a
			c <-contrase�a
		Hasta Que Longitud(c)>6
	Fin Si
	Escribir "Introduce usuario"
	Leer logusuario
	Escribir "Introduce contrase�a"
	Leer logcontrase�a
	Si logusuario != u Entonces
		Escribir "Usuario o contrase�a no v�lidos"
	SiNo
		Si logcontrase�a != c Entonces
			Escribir "Usuario o contrase�a no v�lidos"
		SiNo
			Escribir "Acceso garantizado"
		Fin Si
	Fin Si
FinAlgoritmo

