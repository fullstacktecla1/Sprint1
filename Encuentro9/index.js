let genero=prompt("Ingresa un genero (Hombre H - Mujer M)");//X
let articulosMujeres=["ClavinKleyn",500,true,"MAC",400,true];
let articulosHombres=["GAP", 700, true,"DC",500,true];

// && verdadero si los dos son verdaderos
// || falso si los dos son falsos


while((genero!="H") && (genero!="M")){ 
    genero=prompt("Upps hay un error, Ingresa un genero (Hombre H - Mujer M)");
}

if(genero==="M"){
    // Bloque para Mujer
    let articulo=prompt("Ingrese un nombre de articulo de mujer");
    switch(articulo.toLowerCase()){
        case "bolsa":
            if(articulosMujeres[2]){
                alert(`Disponemos de bolsas ${articulosMujeres[0]} con un precio de $${articulosMujeres[1]}`);
            }else{
                alert(`NO disponemos de bolsas ${articulosMujeres[0]} con un precio de $${articulosMujeres[1]}`);
            }
        break;
        case "labial":
            let disponible = articulosMujeres[5]?'D':'No d';
            alert(`${disponible}isponemos de labial ${articulosMujeres[3]} con un precio de $${articulosMujeres[4]}`);
        break;
        default:
            alert("No disponemos del artículo "+articulo);
        break;
    }
}else{
    // Bloque para Hombre
    // Bloque para Mujer
    let articulo=prompt("Ingrese un nombre de articulo de hombre");
    switch(articulo.toLowerCase()){
        case "chamarra":
            if(articulosHombres[2]){
                alert(`Disponemos de chamarra ${articulosHombres[0]} con un precio de $${articulosHombres[1]}`);
            }else{
                alert(`NO disponemos de chamarra ${articulosHombres[0]} con un precio de $${articulosHombres[1]}`);
            }
        break;
        case "tenis":
            let disponible = articulosHombres[5]?'D':'No d';
            alert(`${disponible}isponemos de tenis ${articulosHombres[3]} con un precio de $${articulosHombres[4]}`);
        break;
        default:
            alert("No disponemos del artículo "+articulo);
        break;
    }
}

for (let i = 0; i < articulosHombres.length; i++) {
    console.log(articulosHombres[i]);
}
articulosMujeres.forEach(element => {
    console.log(element);
});