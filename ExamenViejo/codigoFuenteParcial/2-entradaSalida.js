//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
    var preciofinal;
    var iva;
    importe = parseInt(prompt ("Ingrese el importe"));
    iva = importe * 21/100
    preciofinal = importe + iva;
    document.getElementById ("importe").value = preciofinal;
}

