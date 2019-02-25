function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
do {
acumulador = parseInt(prompt ("ingrese un numero" ));
acumulador = acumulador + acumulador;
contador = contador + 1;
respuesta = prompt ("quiere seguir colocando numeros?");
}while (respuesta == "si" || respuesta == "SI" ||  respuesta == "Si" || respuesta == "sI");
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN