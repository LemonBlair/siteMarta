Algoritmo login
	Leer usuario
	Leer contraseña
	usuarioreal<-"Marta"
	contraseñareal<-"Gatitos"
	Si usuario != usuarioreal Entonces
		Escribir "Usuario o contraseña no válidos"
	SiNo
		Si contraseña != contraseñareal Entonces
			Escribir "Usuario o contraseña no válidos"
		SiNo
			Escribir "Acceso garantizado"
		Fin Si
	Fin Si
FinAlgoritmo

