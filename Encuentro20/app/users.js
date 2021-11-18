const express=require('express');
const router = express.Router();
let {users}=require('./data');
const hash = require('object-hash');

router.get('/users',(req,res)=>{
    res.status(200).json({
        msg:"Listado de usuarios",
        users:users
    })
});

router.post('/user',validardatos,(req,res)=>{
    let user=users.find(elem=>elem.id===req.body.id);
    res.status(200).json({
        msg:"Usuario es existente",
        user:user
    })
});
router.put('/newuser',validardatos,(req,res)=>{
    let {name, birth} = req.body;
    let user={
        name:name,
        birth:birth,
        id:hash(name)
    }
    users.push(user);
    console.log(users);
    res.status(200).json({
        msg:"Usuaro agregado exitosamente",
        id:user.id
    })
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