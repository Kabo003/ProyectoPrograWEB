import express from "express";
import { registerUser, loginUser } from "../controllers/authController.cjs";
import { authenticateToken } from "../middlewares/authMiddleware.cjs"; // Middleware de autenticación

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/protected", authenticateToken, (req, res) => {
  res.status(200).json({ message: "Acceso autorizado.", user: req.user });
});

export default router;
