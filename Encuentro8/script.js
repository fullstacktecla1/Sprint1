let contador=1;

let obtenerUsuario = ()=> {
    nombreUsuario = prompt("Ingrese un nombre de usuario.");
    let existeUsuario = validarUsuario(nombreUsuario);
    return existeUsuario;
}

do{
    //let existeUsuario = obtenerUsuario();
    //if(existeUsuario==true)
    if(obtenerUsuario()){
        alert(`El usuario ${nombreUsuario} ya esta en uso`);
    }else{
        alert('Bienvenido '+nombreUsuario+" ya estas registrado");
    }
    contador++;
}while(contador<2)

function validarUsuario(usuario){
    var nombreUsuario;
    let existe=false;
    switch (usuario) {
        case "Erik":
            existe=true;
        break;
        case "Irving":
            existe=true;
        break;
        case "Cristopher":
            existe=true;
        break;
        case "Alberto":
            existe=true;
        break;
        case "Dan":
            existe=true;
        break;
        case "Gabriela":
            existe=true;
        break;
        case "Marcos":
            existe=true;
        break;
        case "Sebastian":
            existe=true;
        break;
        default:
            existe=false;
        break;
    }
    return existe;
}