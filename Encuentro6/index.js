const CONSUMO_GAS = 15;//Kilometros x litro
const CAPACIDAD_GAS = 45;//Capcacidad de litros en el tanque
const AUTONOMIA = CONSUMO_GAS * CAPACIDAD_GAS;//Cantidad de kilometros con el tanque lleno  675

let msg = document.getElementById("msg");

let cant_recorrido=prompt("Ingrese los kilometros a recorrer");
cant_recorrido=parseInt(cant_recorrido);

while (isNaN(cant_recorrido)){
    cant_recorrido=parseInt(prompt("Upsss! creo que te equivocaste, Ingrese los kilometros a recorrer"));
}

if(cant_recorrido<=AUTONOMIA){
    alert("Puedes recorrer todo el trayecto con el combustible");
    msg.innerText=`Puedes recorrer el trayecto de ${cant_recorrido} kilometros con los ${CAPACIDAD_GAS} litros de tu tanque`;
}else{
    alert("Se necesita más combustible");
    msg.innerText=`No puedes recorrer el trayecto de ${cant_recorrido} kilometros con los ${CAPACIDAD_GAS} litros de tu tanque`;
}