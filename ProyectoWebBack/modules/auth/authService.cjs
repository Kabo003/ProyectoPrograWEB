const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Generar un token JWT
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Comparar contraseñas encriptadas
const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
  generateToken,
  comparePasswords,
};
