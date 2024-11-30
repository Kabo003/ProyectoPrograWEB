import { Usuario } from '../../models/Usuario.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await Usuario.findAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await Usuario.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await Usuario.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    await user.update(req.body);
    res.status(200).json({ message: 'Usuario actualizado exitosamente', user });
  } catch (error) {
    next(error);
  }
};
