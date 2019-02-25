function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo; 
	var respuesta='si';
	var flag = 0;
	
	do{
		numero = parseInt(prompt ("ingrese un numero" ));
		
		if (numero > maximo || flag == 0 ){
			maximo = numero;
		}
		if (numero < minimo ||flag == 0){
			minimo = numero;
			flag = 1;
		}





	respuesta = prompt ("quiere seguir colocando numeros?");
	}while(respuesta!='no')




}//FIN DE LA FUNCIÓN