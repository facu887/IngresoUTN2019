function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.floor (Math.random()* 10 + 1);
	if (nota >= 9 ) {
		alert ("Excelente, su nota es " + nota);
	}
	else if (nota >= 4) {
		alert ("Aprobó, su nota " + nota);
	}
	else {
		alert ("Vamos, la proxima se puede, su nota es " + nota);
	}
}//FIN DE LA FUNCIÓN