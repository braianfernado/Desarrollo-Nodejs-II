const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');


router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);
router.get('/nuevo', customerController.nuevos);
router.post('/prueba', customerController.prueba);




module.exports = router;