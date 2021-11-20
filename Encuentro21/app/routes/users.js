const express=require('express');
const router = express.Router();
const hash = require('object-hash');
const conexion = require('../db/conexion');

router.get('/users',(req,res)=>{
    let sql = `SELECT * FROM users;`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error(error);
        res.status(200).json({
            msg:"Listado de usuarios",
            users:results
        });
    });
});

router.post('/user',validardatos,(req,res)=>{
    let sql=`SELECT * FROM users WHERE id='${req.body.id}';`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error(error);
        res.status(200).json({
            msg:"Usuario es existente",
            users:results
        });
    });
});
router.put('/newuser',validardatos,(req,res)=>{
    let {name, birth} = req.body;
    let id=hash(name);
    let sql=`INSERT INTO users VALUES('${id}','${name}', '${birth}');`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error(error);
        res.status(200).json({
            msg:"Usuaro agregado exitosamente",
            id:id
        });
    });
});

router.delete('/delete/:id',(req,res)=>{
    if(req.params.id==''){
        res.status(401).json({
            msg:"Datos invalidos"
        }); 
    }else{
        let sql=`DELETE FROM users WHERE id='${req.params.id}';`;
        // let sql=`DELETE FROM users;`; NO SE DEBE UTILIZAR SIN FILTRO
        conexion.query(sql, function (error, results, fields) {
            console.log(error);
        if (error) throw new Error(error);
        res.status(200).json({
            msg:"Usuario ${req.params.id} eliminado",
            resultado:results
        });
        });
    }
});

function validardatos(req,res,next){
    console.log(req.body);
    if(req.body.api_key==undefined){
        res.status(401).json({
            msg:"Datos invalidos"
        });
    }else{
        next();
    }
}

module.exports = router;