let resultadoResta = resta(10, 3);
console.log(resultadoResta);

let suma = (a,b)=>{
    return a+b;
};

let resultadoSuma = suma(5,4);
alert(`Resultado de la suma ${resultadoSuma} \r\nResultado de la resta es ${resultadoResta}`);

function resta(a,b){
    return a-b;
}