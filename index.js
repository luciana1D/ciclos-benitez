/*let entrada =parseInt(prompt("Ingrese un numero"));
let salida = entrada + " " + "ingresada";
alert(salida);
let entradaDos = prompt("Ingrese su apellido");
let salidaDos = entradaDos + " " + "ingresada";
alert(salidaDos);
let resultados = "Su nombre completo es" + " " + entrada + " " + entradaDos;
alert(resultados);*/


//se le pide al usuario ingresar un numero y se sumas hasta 10 veces
const entrada = parseInt(prompt("Ingrese un numero"));
for (i = 1; i <= 10; i++) {
    const resultado = entrada + i;
    alert(entrada + "+" + i + "=" + resultado);
}



