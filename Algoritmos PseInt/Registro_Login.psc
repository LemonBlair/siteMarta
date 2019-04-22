Algoritmo registro
	Escribir "Escribe tu usuario"
	Leer usuario
	u<- usuario
	Escribir "Escribe tu contraseña"
	Leer contraseña
	c<- contraseña
	Si Longitud(c)<6 Entonces
		Repetir
			Escribir "La contraseña debe tener 6 o más caracteres."
			Escribir "Escribe una nueva contraseña"
			Leer contraseña
			c <-contraseña
		Hasta Que Longitud(c)>6
	Fin Si
	Escribir "Introduce usuario"
	Leer logusuario
	Escribir "Introduce contraseña"
	Leer logcontraseña
	Si logusuario != u Entonces
		Escribir "Usuario o contraseña no válidos"
	SiNo
		Si logcontraseña != c Entonces
			Escribir "Usuario o contraseña no válidos"
		SiNo
			Escribir "Acceso garantizado"
		Fin Si
	Fin Si
FinAlgoritmo

