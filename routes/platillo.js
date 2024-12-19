const express = require('express');
const router = express.Router();
const platilloController = require('../controllers/platilloController');

// api/platillos
router.post('/', platilloController.crearPlatillo);
router.get('/', platilloController.obtenerPlatillos);
router.get('/:id', platilloController.obtenerPlatillo);
router.put('/:id', platilloController.actualizarPlatillo);
router.delete('/:id', platilloController.eliminarPlatillo);

module.exports = router;
