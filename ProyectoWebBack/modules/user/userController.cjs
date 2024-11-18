const Usuario = require('./User');

// Obtener todos los usuarios
const getAllUsers = async (req, res, next) => {
  try {
    const users = await Usuario.findAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Obtener un usuario por ID
const getUserById = async (req, res, next) => {
  try {
    const user = await Usuario.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Actualizar un usuario
const updateUser = async (req, res, next) => {
  try {
    const user = await Usuario.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    await user.update(req.body); // Actualizar usuario
    res.status(200).json({ message: 'Usuario actualizado exitosamente', user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
};
