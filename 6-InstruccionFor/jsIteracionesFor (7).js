function Mostrar()
{
var i;
var contador; 
var numero;
numero = parseInt(prompt ("ingrese un numero"));
contador = 0;
for (i=1; i <= numero; i++ ); {
    if (numero % i == 0) {
        contador++  ;
        console.log(i);
    }
}
  console.log(contador);
}//FIN DE LA FUNCIÓN