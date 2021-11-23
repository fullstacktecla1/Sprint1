const express=require('express');
const router = express.Router();
const hash = require('object-hash');
const {seq, errorMySQL} = require('../db/conexion');

//Seleccionar todos los usuarios
router.get('/users',(req,res)=>{
    let sql = `SELECT * FROM users;`;
    seq.query(sql, { type: seq.QueryTypes.SELECT })
    .then(respuesta=>{
        response("todos los usuarios usuarios", respuesta,false,res);
    })
    .catch(respuesta=>{
        response("Error en la consulta", null, respuesta,res);
    });
});


router.post('/user',validardatos,(req,res)=>{
    //let sql=`SELECT * FROM users WHERE id='${req.body.id}';`;
    let sql=`SELECT * FROM users WHERE id=?;`;
    seq.query(sql, { type: seq.QueryTypes.SELECT, replacements:[req.body.id] })
    .then(
        (respuesta)=>{
            response("Usuario existente", respuesta,false,res);
        }
    ).catch(respuesta=>{
        response("Error en la consulta", null, respuesta,res);
    });
});

// Actualizar un usuario existente
router.put('/user',validardatos,(req,res)=>{
    let {id, name, birth} = req.body;
    let sql=`UPDATE users SET name='${name}', birth='${birth}' WHERE id='${id}';`;
    seq.query(sql, { type: seq.QueryTypes.SELECT })
    .then(
        (respuesta)=>{
            response("Usuario actualizado exitosamente", respuesta,false,res);
        }
    ).catch(respuesta=>{
        response("Error en la consulta", null, respuesta,res);
    });
});

// Insertar un usuario nuevo 
router.post('/add',validardatos,(req,res)=>{
    let {name, birth} = req.body;
    let id=hash(name);
    let sql=`INSERT INTO users VALUES('${id}','${name}', '${birth}');`;
    seq.query(sql, { type: seq.QueryTypes.SELECT })
    .then(
        (respuesta)=>{
            response("Usuario agregado exitosamente", respuesta,false,res);
        }
    ).catch(respuesta=>{
        response("Error en la consulta", null, respuesta,res);
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
        seq.query(sql,{type: seq.QueryTypes.DELETE})
        .then(respuesta=>{
            let existe=(respuesta!=undefined&&respuesta.affectedRows==0)?'No existe':'eliminado';
            response(`Usuario ${req.params.id} ${existe}`, respuesta, false, res);
        })
        .catch(respuesta=>{
            console.log("Ingreso al catch", respuesta.name);
            response(`Usuario ${req.params.id}`, null, respuesta, res);
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