const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehiculoController');

router.post('/', controller.crear);
router.get('/', controller.listar);
router.get('/:placa', controller.obtener);
router.put('/:placa', controller.actualizar);
router.delete('/:placa', controller.eliminar);

module.exports = router;
