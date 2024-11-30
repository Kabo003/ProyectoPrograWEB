const express = require('express');
const { createOrder, getOrdersByUser } = require('./ordenController');

const router = express.Router();

router.post('/', createOrder);  
router.get('/user/:usuario_id', getOrdersByUser); 

module.exports = router;
