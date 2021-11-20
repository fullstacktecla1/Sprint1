const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.status(200).json({msg:"Bienvenido al Home"});
});
router.put('/error', function(req, res) {
    throw new Error('¡Ups!');//Generar un error voluntario
});

module.exports = router;