const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.urlencoded());
const moment=require('moment');
let {ciudades, hoteles} = require('./app/data.js');

app.listen(process.env.PUERTO,()=>{console.log('Servidor de Node con Express iniciado la ruta '+process.env.HOST);});

app.get('/',(req,res)=>{
    res.status(200).json(
        {msg:"Respuesta desde Node desde home"}
    );
});
app.get('/ciudades',(req,res)=>{
    res.status(200).json(
        {
            msg:"Listado de ciudades disponibles",
            ciudades: ciudades
        }
    );
});
app.get('/hoteles',(req,res)=>{
    let ciudad=req.query.city;
    console.log("llegó el nombre de la ciudad: ",ciudad);
    let hotel=hoteles[ciudad];
    console.log(hotel);
    if(hotel!=undefined)
    res.status(200).json(
        {
            msg:`Hoteles de la ciudad ${ciudad}`,
            detail:hotel
        }
    );
});
app.post('/reserva/:city',(req,res)=>{
    console.log(req.params.city);
    let fechaInicial = moment(req.body.iniDate);
    let fechaFinal = moment(req.body.endDate);
    console.log(`Fecha inicial ${fechaInicial}, fecha final ${fechaFinal}`);
    if(moment(fechaInicial).isBefore(fechaFinal)){
        let hotel=hoteles[req.params.city];
        if(hotel.disponible){
            res.status(200).json(
                {
                    msg:"Hotel disponible",
                    hotel:hotel
                }
            );
        }else{
            res.status(200).json(
                {msg:`No hay disponibilidad en el hotel ${req.params.city}`}
            );
        }
    }else{
        res.status(205).json(
            {msg:`Error en las fechas, la fecha inicial ${moment(fechaInicial).format('DD-MM-YYYY')} es posterior a la fecha final`}
        );
    }
});