class Perro{
    
    constructor(nombre="hola",raza="nada",tamano,estadoAdopcion=false){
        this.nombre=nombre;
        this.raza=raza;
        this.tamano=tamano;
        this.estadoAdopcion=estadoAdopcion;
    }

    modificarEstadoDeAdopcion(estadoAdopcion){
        this.estadoAdopcion=estadoAdopcion;
    }

    informarEstadoDeAdopcion(){
        return this.estadoAdopcion;
    }
}

//let perros=[];
let perros = new Array();
do{
    let nombre=prompt("Ingresa el nombre del perrito");
    let raza=prompt("Ingresa la raza de "+nombre);
    let tamano=prompt("Ingresa el tamaño de "+nombre);
    let estado=prompt(nombre +" esta adoptado? Y/N").toUpperCase()=="Y";
    let perrito = new Perro(nombre, raza, tamano, estado);
    perros.push(perrito);
}while(prompt("ingresar otro perrito? Y/N").toUpperCase()=="Y")

function mostrarAdoptados(){
    let adoptados=[];
    for (let i = 0; i < perros.length; i++) {
        if(perros[i].estadoAdopcion)
            adoptados.push(perros[i]);        
    }
    console.log(adoptados);
    
    let adoptadosFilter=new Array();
    adoptadosFilter=perros.filter(elem=>elem.estadoAdopcion);
    console.log(adoptadosFilter);
}