const mysql      = require('mysql');
const conexion = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER_DB,
  password : process.env.PASSWORD_DB,
  database : process.env.NAME_DB
});
conexion.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('Id de conexion  ' + conexion.threadId);
  });
function errorMySQL(err,res){
    console.log(err);
    res.status(500).json({
        msg:'Error del sistema, tu solicitud en base de datos no se puede atender en este momento!',
        error:err
    });
}
module.exports = {conexion, errorMySQL};