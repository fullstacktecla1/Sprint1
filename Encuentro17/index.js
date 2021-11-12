const express = require('express');
const app = express();
require('dotenv').config();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(process.env.PUERTO,()=>{console.log('Servidor de Node con Express iniciado la ruta '+process.env.HOST);});

app.get('/',(req,res)=>{
    res.status(200).json(
        {msg:"Respuesta desde Node desde home"}
    );
});
app.post('/otro',(req,res)=>{
    console.log(req.body);
    res.status(202).json(
        {msg:"Respuesta desde Node con la ruta /otro"}
    );
});