const express = require('express');
const router = express.Router();

const multaController = require('../controllers/multasController');

router.get('/update_multa/:id', multaController.editar_multa);
router.post('/guardar_multa', multaController.guardarmulta);
router.post('/update_multa/:id', multaController.actualizar_multa);
router.get('/delete_multa/:id', multaController.delete_multa);
router.get('/multa', multaController.multa);




module.exports = router;