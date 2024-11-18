const Usuario = require('../../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Registro de usuario
const registerUser = async (req, res, next) => {
  try {
    const { nombre, contrasena } = req.body;
    const hashedPassword = await bcrypt.hash(contrasena, 10); // Encriptar contraseña
    const newUser = await Usuario.create({ nombre, contrasena: hashedPassword });
    res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
  } catch (error) {
    next(error);
  }
};

// Inicio de sesión
const loginUser = async (req, res, next) => {
  try {
    const { nombre, contrasena } = req.body;
    const user = await Usuario.findOne({ where: { nombre } });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena); // Verificar contraseña
    if (!isPasswordValid) return res.status(401).json({ message: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: user.id, nombre: user.nombre }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
