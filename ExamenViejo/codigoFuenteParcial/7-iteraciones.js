//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
	var nota;
    var sexo;
    var promedio;
    var acumulador;
    var contador;
    var notabaja;
    var flag;
    var i;
    promedio = 0;
    acumulador = 0;
    contador = 0
    flag = 0;
    for (i = 1; i <= 6; i++ ) {
        nota = parseInt(prompt("Ingrese la nota"));
        sexo = prompt("Ingrese el sexo");
        while (nota>10 || nota < 0 || isNaN(nota)) {
            nota = parseInt(prompt("Reingrese la nota"));
        } 
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Reingrese el sexo");
        }
        acumulador += nota;
        if (nota < notabaja || flag == 0 ){
            notabaja = nota;
            flag = 1;
        }
        if (nota >= 6 && sexo == "m") {
            contador++ ;
        }
        acumulador = acumulador + nota;
    }
    promedio = acumulador/i;
    alert ("promedio " + promedio);
    alert ("nota mas baja " + notabaja);
    alert ("cantidad de varones con nota mayor a 6 " + contador);
}

