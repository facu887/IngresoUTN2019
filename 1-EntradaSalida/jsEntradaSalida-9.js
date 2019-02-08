/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var resultado;
sueldo = parseInt (document.getElementById("sueldo").value);
resultado = sueldo + sueldo * 0.1
document.getElementById("resultado").value = resultado;
}
