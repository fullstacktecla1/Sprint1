
"use strict";
console.log(nuevaVariable);
///Ciclo for números pares del 100 al 0
console.log("Ciclo for números pares del 100 al 0");
for(let num=100;num>=0;num-=2){
    console.log(num);
}
let continuar="hola";
console.log(continuar);

do {
    continuar = parseInt(prompt("Desea repetir el ciclo 1/0?"));
    console.log("Su respuesta fue: "+continuar);
} while (continuar===1);

///Ciclo do while números pares del 100 al 0
console.log("Ciclo do while números pares del 100 al 0");
let cont=100;
do {
    console.log(cont);
    cont=cont-2;
} while (cont>=0);

///Ciclo while números pares del 0 al 100
console.log("Ciclo do while números pares del 100 al 0");
cont=0;
while(cont<=100){
    console.log(cont);
    cont+=2;
    if(cont===50){
        var nuevaVariable="hola";
    }
    console.log(nuevaVariable);
}