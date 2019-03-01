//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
    var numero2;
    var resultado;  
    numero1 = parseInt(prompt("Ingrese un numero")); 
    numero2 = parseInt(prompt("Ingrese un numero")); 
    if (numero1 == numero2) {
        resultado = numero1 * numero2;
        document.write("El resultado es: " + resultado );    
    }
    else if (numero1 > numero2) {
        resultado = numero1 - numero2;
        document.write("El resultado es: " + resultado );   
    }
    else {
        resultado = numero1 + numero2;
        document.write("El resultado es: " + resultado );   
    }
}

