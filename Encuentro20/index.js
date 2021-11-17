const express = require('express');
const app = express();
require('dotenv').config();

app.listen(process.env.PUERTO,()=>{console.log('Servidor de Node con Express iniciado la ruta '+process.env.HOST+":"+process.env.PUERTO);});

const router_home=require('./app/home');
app.use('/',router_home);//llamamos las rutas que definimos en el home.js
//también podríamos utilizar la ruta así: app.use('/',require('./app/home.js'));


app.use((req,res,next)=>{//Middleware final para manejo de endpoint no existente
    res.status(404).json({msg:'Tu solicitud no se puede atender en este momento!'});
});
app.use((err, req, res, next)=> {//Middleware para el manejo de errores del sistema
    console.error(err.stack);
    res.status(500).json({msg:'Error del sistema, tu solicitud no se puede atender en este momento!'});
});
