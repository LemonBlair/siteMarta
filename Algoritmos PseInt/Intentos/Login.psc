Algoritmo login
	Leer usuario
	Leer contrase�a
	usuarioreal<-"Marta"
	contrase�areal<-"Gatitos"
	Si usuario != usuarioreal Entonces
		Escribir "Usuario o contrase�a no v�lidos"
	SiNo
		Si contrase�a != contrase�areal Entonces
			Escribir "Usuario o contrase�a no v�lidos"
		SiNo
			Escribir "Acceso garantizado"
		Fin Si
	Fin Si
FinAlgoritmo

