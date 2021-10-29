// Punto 1: Genera un array con al menos 10 datos de diferentes tipos.
// tu script debe:
// sumar todos los valores numéricos en una variable y mostrarla.
// Crear un nuevo array con todos los datos no numéricos.


// Punto 2: Modificar el ejercicio anterior y agregarle:
// Ingresar mediante prompt números indefinidamente al array hasta que el usuario ingrese “Stop”.


// Punto 3: Modificar el ejercicio anterior y agregarle:
// Crear un array para los números pares, otro para los impares y un tercero para almacenar datos no numéricos.


// Punto 1
let distintosTipos = ["carro", 23,  true, "azul", 2, false, undefined, 100, 15, "triangulo"];
let noNumericos = [];
let sumatoria = 0;

for (i = 0; i < distintosTipos.length; i++) {
    if (typeof distintosTipos[i] === 'number') {
        sumatoria = sumatoria + distintosTipos[i];
    } else {
        noNumericos.push(distintosTipos[i])
    }
}

alert("la suma de los valores númericos del array es: " + sumatoria);



// Punto 2
let valorIngresado;
let valorParseado;

while (valorIngresado !== "stop") {
    valorIngresado = prompt("ingrese un valor:");
    valorParseado = parseInt(valorIngresado);
    if (valorIngresado !== "stop"){
        if (isNaN(valorParseado)) {
            //alert("no es un numero");
            distintosTipos.push(valorIngresado);
        } else {
            //alert("El nro es: " + valorParseado);
            distintosTipos.push(valorParseado);
        }
    }
}


// Punto 3
let listaPares = [];
let listaImpares = [];
let noNumericos2 = [];

for (i = 0; i < distintosTipos.length; i++) {

    if (typeof distintosTipos[i] !== 'number') { // si no es un numero
        noNumericos2.push(distintosTipos[i])
    } else { // si es un numeros

        if (distintosTipos[i] % 2 == 0) { // si es par
            listaPares.push(distintosTipos[i]);
        } else { // si es impar
            listaImpares.push(distintosTipos[i]);
        }

    }

}
