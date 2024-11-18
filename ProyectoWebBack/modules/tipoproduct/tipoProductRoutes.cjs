const express = require('express');
const { getAllTypes } = require('./tipoProductController');

const router = express.Router();

router.get('/', getAllTypes); // Listar tipos de producto

module.exports = router;
