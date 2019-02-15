function Mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
if (edad >= 18) {
    alert ("es mayor de edad");
}
else if (edad < 13) {
    alert ("es menor de edad");
}
else {
    alert ("es adolecente");
}



}//FIN DE LA FUNCIÓN
