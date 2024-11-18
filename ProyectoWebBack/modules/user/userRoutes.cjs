const express = require('express');
const { getAllUsers, getUserById, updateUser } = require('./userController');

const router = express.Router();

router.get('/', getAllUsers);        // Ruta para obtener todos los usuarios
router.get('/:id', getUserById);     // Ruta para obtener un usuario por ID
router.put('/:id', updateUser);      // Ruta para actualizar un usuario

module.exports = router;
