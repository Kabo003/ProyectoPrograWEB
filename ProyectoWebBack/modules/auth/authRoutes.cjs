const express = require('express');
const { registerUser, loginUser } = require('./authController');

const router = express.Router();

router.post('/register', registerUser); // Ruta para registro de usuarios
router.post('/login', loginUser);       // Ruta para inicio de sesión

module.exports = router;
