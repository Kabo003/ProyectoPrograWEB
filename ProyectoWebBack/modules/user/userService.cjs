//Control de usuarios para el administrador

const Usuario = require('./User');

const fetchAllUsers = async () => {
  return await Usuario.findAll();
};

const fetchUserById = async (id) => {
  return await Usuario.findByPk(id);
};

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
