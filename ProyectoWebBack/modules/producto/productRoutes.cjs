const express = require('express');
const { getAllProducts, getProductById } = require('./productController');

const router = express.Router();

router.get('/', getAllProducts);       // Listar productos
router.get('/:id', getProductById);    // Obtener producto por ID

module.exports = router;
