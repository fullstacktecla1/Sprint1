const URL_API="https://api.github.com";

function obtenerUsuariosGitHub(){
    fetch(URL_API+'/users').then(respJson).catch(err=>console.error(err))
}

let obtenerUsuarioGitHub = async (username)=>{
    await fetch(`${URL_API}/users/${username}`).then(respJson);
}

function respJson(res){
    res.json().then(data=>mostrarDatos(data)).catch(err=>console.error(err));
}

function mostrarDatos(data){
    let content = document.createElement("div");
    console.log(data);
    if(data.length === undefined)//typeof data === 'object' valida tipos de datos, pero Array y Json son object
        content.innerHTML+=`<div><p>${data.login}</p><p><img src='${data.avatar_url}'/></p></div>`;
    else
        data.forEach(data => {content.innerHTML+=`<div><p>${data.login}</p><p><img src='${data.avatar_url}'/></p></div>`;});
    document.body.appendChild(content);
}
obtenerUsuarioGitHub('Myderthus');
obtenerUsuariosGitHub();
