const express=require('express');
const router = express.Router();
const hash = require('object-hash');
const {conexion, errorMySQL} = require('../db/conexion');

//Seleccionar todos los usuarios
router.get('/users',(req,res)=>{
    let sql = `SELECT * FROM users;`;
    conexion.query(sql, function (error, results, fields) {
        response("listado de usuarios", results, error, res);
    });
});

// Seleccionar un usuario por id
router.post('/user',validardatos,(req,res)=>{
    let sql=`SELECT * FROM users WHERE id='${req.body.id}';`;
    conexion.query(sql, function (error, results, fields) {
        response("Usuario existente", results, error, res);
    });
});

// Actualizar un usuario existente
router.put('/user',validardatos,(req,res)=>{
    let {id, name, birth} = req.body;
    let sql=`UPDATE users SET name='${name}', birth='${birth}' WHERE id='${id}';`;
    conexion.query(sql, function (error, results, fields) {
        response("Usuario actualizado exitosamente", results, error, res);
    });
});

// Insertar un usuario nuevo 
router.post('/add',validardatos,(req,res)=>{
    let {name, birth} = req.body;
    let id=hash(name);
    let sql=`INSERT INTO users VALUES('${id}','${name}', '${birth}');`;
    conexion.query(sql, function (error, results, fields) {
        response("Usuario agregado exitosamente", id, error, res);
    });
});

// Eliminar un usuario
router.delete('/delete/:id',(req,res)=>{
    if(req.params.id==''){
        res.status(401).json({
            msg:"Datos invalidos"
        }); 
    }else{
        let sql=`DELETE FROM users WHERE id='${req.params.id}';`;
        // let sql=`DELETE FROM users;`; NO SE DEBE UTILIZAR SIN FILTRO
        conexion.query(sql, function (error, results, fields) {
            let existe=(results!=undefined&&results.affectedRows==0)?'No existe':'eliminado';
            response(`Usuario ${req.params.id} ${existe}`, results, error, res);
        });
    }
});

//Middleware para validación básica de parametros
function validardatos(req,res,next){
    console.log(req.body);
    if(req.body.api_key==undefined){
        res.status(401).json({
            msg:"Datos invalidos"
        });
    }else
        next();
}

//Funcion generica para manejo de error o respuesta existosa
function response(msg, data, err, res){
    if (err)
        errorMySQL(err,res);
    else{
        res.status(200).json({
            msg:msg,
            data:data
        });
    }
}
module.exports = router;