function Mostrar()
{
	//declarar contadores y variables 
	var numero;
	var respuesta="si";
	var positvos;
	var negativos;
	var contadorpositivos;
	var contadornegativos;
	var contadorceros;
	var contadorpares;
	var promediopositivos;
	var promedionegativos;
	var diferencia;
	do{
		numero = parseInt(prompt ("ingrese un numero"));
		if (numero > 0) {
			positvos = positvos + numero;
			contadorpositivos++;
		}
		else if (numero = 0) {
			contadorceros++;
		}
		else {
			negativos = negativos + numero;
			contadornegativos ++;
		}
		if (numero % 2 == 0) {
			contadorpares++;
		}
		respuesta = prompt("Quiere seguir?")
	}	while(respuesta!="no")

promediopositivos = positvos / contadorpositivos;
promedionegativos = negativos / contadornegativos;
diferencia = contadorpositivos - contadornegativos;
document.write ("1-Suma de los negativos: " + negativos + "<br>" +"2-Suma de los positivos: " + positvos + "<br>" +"3-Cantidad de positivos: " + contadorpositivos + "<br>" +"4-Cantidad de negativos: " + contadornegativos + "<br>" + "5-Cantidad de ceros: " + contadorceros + "<br>" +"6-Cantidad de números pares: " + contadorpares + "<br>" +"7-Promedio de positivos: " + promediopositivos + "<br>" +"8-Promedios de negativos: " + promedionegativos + "<br>" +"9-Diferencia entre positivos y negativos: " + diferencia); 
}//FIN DE LA FUNCIÓN