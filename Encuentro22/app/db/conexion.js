const Sequelize = require('sequelize');

const seq = new Sequelize(process.env.NAME_DB, process.env.USER_DB,process.env.PASSWORD_DB,
  {
    dialect:'mariadb',
    host: process.env.HOST
  });
//const sequelize = new Sequelize('mariabd://user:pass@example.com:5432/dbname');
  seq.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


function errorMySQL(err,res){
    console.log(err);
    res.status(500).json({
        msg:'Error del sistema, tu solicitud en base de datos no se puede atender en este momento!',
        error:err
    });
}
module.exports = {seq, errorMySQL};