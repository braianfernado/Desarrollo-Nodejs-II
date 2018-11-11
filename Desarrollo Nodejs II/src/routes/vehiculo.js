const express = require('express');
const router = express.Router();

const vehiculoController = require('../controllers/vehiculoController');

router.get('/update_vehiculo/:id', vehiculoController.editar);
router.post('/guardar', vehiculoController.guardarvehiculo);
router.post('/update_vehiculo/:id', vehiculoController.actualizar);
router.get('/delete_vehiculo/:id', vehiculoController.delete_vehiculo);
router.get('/vehiculo', vehiculoController.vehiculo);




module.exports = router;