const notaUno = parseInt(prompt("Ingrese la primer nota"));
const notaDos = parseInt(prompt("Ingrese la segunda nota"));
const notaTres = parseInt(prompt("Ingrese la tercer nota"));

const promedio = (notaUno + notaDos + notaTres) / 3;
console.log("El promedio de edad es", promedio);
if (promedio < 7) {
    alert("El alumno desaprobo la materia con un promedio de" + promedio);
} else {
    alert("El alumno aprobo la materia con una promedio de" + promedio);
}