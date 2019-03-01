//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
    var largo;
	var perimetro;
    var alambre;
    ancho = document.getElementById("ancho").value
    largo = document.getElementById("largo").value;
    if (ancho == 0 || isNaN(ancho)){
        alert ("Reingrese el ancho");
    }
    else if (largo == 0 || isNaN(largo)){
        alert ("Reingrese el largo");
    }
    else {

    perimetro = 2*ancho + 2*largo;
    alambre = perimetro * 6;
    alert ("La cantidad de metrosn de alambre a usar son: " + alambre);
}
}
