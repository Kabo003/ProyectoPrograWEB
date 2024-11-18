const Usuario = require('./User');

// Obtener todos los usuarios
const fetchAllUsers = async () => {
  return await Usuario.findAll();
};

// Obtener un usuario por ID
const fetchUserById = async (id) => {
  return await Usuario.findByPk(id);
};

// Actualizar un usuario
const updateUserById = async (id, data) => {
  const user = await Usuario.findByPk(id);
  if (!user) throw new Error('Usuario no encontrado');
  return await user.update(data);
};

module.exports = {
  fetchAllUsers,
  fetchUserById,
  updateUserById,
};
