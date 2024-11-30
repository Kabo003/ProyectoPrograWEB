const express = require('express');
const { getAllTypes } = require('./tipoProductController');

const router = express.Router();

router.get('/', getAllTypes);

module.exports = router;
