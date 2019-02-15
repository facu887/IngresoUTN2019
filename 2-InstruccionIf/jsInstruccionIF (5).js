function Mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
if (!(edad <= 18 && edad >= 13 )) {
 alert ("No es adolecente");
}

}//FIN DE LA FUNCIÓN