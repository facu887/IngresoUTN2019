/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var numero1;
var numero2;
var suma;
numero1 = parseInt (document.getElementById("numeroUno").value);
numero2 = parseInt (document.getElementById("numeroDos").value);
suma = numero1 + numero2;
alert ("La suma es " + suma);
}

