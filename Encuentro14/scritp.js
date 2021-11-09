const URL_API="https://pokeapi.co/api/v2/pokemon/";

const content = document.getElementById("content");
const texto = document.getElementById("txt_nombre");
const form = document.getElementById("form");
form.addEventListener('submit',actionForm);
function actionForm(elem){
    elem.preventDefault();
    if(elem.submitter.id=="search")
        content.innerHTML="";
    llamarAPI(texto.value.toLowerCase());
}

function llamarAPI(nombre){
    fetch(URL_API+nombre)
        .then(mostrarPokemon)
        .catch(err=>console.error(err));
}

async function mostrarPokemon(res){
    console.log(res);
    try{
        let resp = await res.json()//.then(res=>console.log(res));
        console.log("imprime",resp);
        let contenedor=document.createElement("div");
        let nombre=document.createElement("span");
        nombre.innerText=resp.name;
        nombre.classList.add("titulo");
        let id=document.createElement("span");
        id.innerText=resp.id;
        id.classList.add("titulo_id");
        let img=document.createElement("img");        
        img.src=resp.sprites.front_default;
        contenedor.appendChild(nombre);
        contenedor.appendChild(id);
        contenedor.appendChild(img);
        content.appendChild(contenedor)
    }catch(err){
        console.error(err);
        alert("No se encontraron resultados para la búsqueda");
    }
}
