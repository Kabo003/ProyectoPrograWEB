import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (inputPassword, storedPassword) => {
  return bcrypt.compare(inputPassword, storedPassword);
};

export const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, nombre: user.nombre, correo: user.correo },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};
