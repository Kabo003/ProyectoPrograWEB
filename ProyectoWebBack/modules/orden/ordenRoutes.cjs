const express = require('express');
const { createOrder, getOrdersByUser } = require('./ordenController');

const router = express.Router();

router.post('/', createOrder);               // Crear una nueva orden
router.get('/user/:usuario_id', getOrdersByUser); // Obtener órdenes por usuario

module.exports = router;
