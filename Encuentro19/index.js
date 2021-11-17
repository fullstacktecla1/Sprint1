const express = require('express');
const app = express();
require('dotenv').config();
const telefonos = require('./data.js');
app.use(express.urlencoded());
app.use(express.json());
app.listen(process.env.HOST,()=>{console.log("Servidor iniciado por puerto "+process.env.HOST);});

app.get('/',(req,res)=>{
    res.status(200).json({msg:'ok'});
});

app.get('/telefonos',(req,res)=>{
    let respuesta ={
        msg:'Listado de telefonos',
        telefonos:telefonos
    };
    res.status(200).json(respuesta);
});
function valideParametrosDeEntrada(req,res,next){
    console.log(req.body.marca);
    if (req.body.marca===undefined) {
        res.status(404).json({msg:'Error en los parametros de entrada'});
    }else
        next();
}
function validarValorParametro(req,res,next){
    console.log('error',telefonos.filter(elem=>elem.marca===req.body.marca));
    if(telefonos.filter(elem=>elem.marca===req.body.marca).length===0)
        res.status(404).json({msg:'Error en los valores de los parametros de entrada'});
    else
        next();
}
app.post('/telefonos', valideParametrosDeEntrada,validarValorParametro,(req,res)=>{
    console.log(req.body);
    let respuesta ={
        msg:'Telefono específico',
        telefono:telefonos.filter(elem=>elem.marca===req.body.marca)
    };
    res.status(200).json(respuesta);
});

app.post('/telefonos/:parametroenurl',(req,res)=>{
    console.log('Parametros de en url amigable',req.params.parametroenurl);
    console.log('Parametros de Query',req.query);
    console.log('Parametros de Body',req.body);
    let respuesta ={
        msg:'Telefono específico',
        telefono:telefonos.filter(elem=>elem.marca===req.body.marca)
    };
    res.status(200).json(respuesta);
});