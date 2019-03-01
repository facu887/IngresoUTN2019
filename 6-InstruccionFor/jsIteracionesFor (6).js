function Mostrar()
{
var i;
var numero;
var contador;
contador = 0
numero = prompt("ingrese un numero");
for (i=0 ; i <= numero; i++ ) {
    if (i % 2 == 0) {
        contador++  ;
        console.log(i);
    }

}
        console.log(contador);
}//FIN DE LA FUNCIÓN