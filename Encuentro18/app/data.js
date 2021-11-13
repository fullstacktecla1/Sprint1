const ciudades=["CiudadDeMéxico","Monterrey","Morelia"];
const hoteles={
    'CiudadDeMéxico':{
        hotel:'Hilton',
        disponible: true,
        precio: 1500
    },
    'Morelia':{
        hotel:'FiestaINN',
        disponible: true,
        precio: 1800
    },
    'Monterrey':{
        hotel:'Alameda',
        disponible: false,
        precio: 1000
    }
}

module.exports = {ciudades, hoteles};