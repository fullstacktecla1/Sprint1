/*function primera(){
    console.log("Soy la primera funcion");
}

function primera(callback){
    setTimeout(
        ()=>{
            console.log("Soy la primera funcion");
            callback();//aquí se está llamando la función que llegó como parametro, o sea segunda
        },1000);
    callback("tercera"," antes de la segunda y por fuera del setTimeOut");
}

let segunda = (posicion,p2)=>{
    posicion=posicion==''?"segunda":posicion;
    console.log("Soy la "+posicion+" función"+p2);
}


primera(segunda);*/
//segunda();



let promesa = new Promise(
    //function(resolve,reject){
    function(callBackRespuestaCorrecta,callBackRespuestaIncorrecta){
        setTimeout(()=>{
            let num= Math.floor(Math.random() * 101);
            if(num % 2 === 0){
                callBackRespuestaCorrecta(`La promesa es exitosa porque ${num} es par`);//resolve
                //respuestaCorrecta(`La promesa es exitosa porque ${num} es par`)
            }else{
                callBackRespuestaIncorrecta(`La promesa es exitosa porque ${num} NO es par`);//reject
                //respuestaIncorrecta(`La promesa es exitosa porque ${num} NO es par`)
            }
        },4000);
    }
);

function respuestaCorrecta(respuesta){
    imprimirLog("respuesta positiva "+respuesta);
}
function respuestaIncorrecta(respuesta){
    imprimirLog("respuesta negativa "+respuesta);
}



async function primera(){

    promesa.then(respuestaCorrecta).catch(respuestaIncorrecta);
    console.log("Imprimo primero este mensaje");

    try{
        let resultado = await promesa;
        console.log(`Este es el resultado de la promesa sincrona ${resultado}`);
    }catch(err){
        console.log(`Este es el resultado con error de la promesa sincrona ${err}`);
    }
    imprimirLog("Esto se imprimio antes que la promesa");    
}
primera();//ejecucion de la promesa
function imprimirLog(data){
    console.log(data);
}