//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
    var i;
    var diamayor;
    var diamenor;
    var flag;
    var mayor;
    var menor;
    flag = 0;
    for (i = 1; i <= 7; i++){
        importe = parseInt(prompt("Ingrese el importe del dia " + i ));
        while ( importe == 0 || isNaN(importe)){
        importe = parseInt(prompt("Reingrese el importe del dia " + i));
    }
        if (importe > mayor || flag == 0 ) {
            mayor = importe;
            diamayor = i;
            flag = 1;
        }
      if (importe < menor || flag == 0 ) {
            menor = importe;
            diamayor = i;
                flag = 1;
        }

    }
	
}

