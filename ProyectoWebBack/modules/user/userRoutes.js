import express from 'express';
import { getAllUsers, getUserById, updateUser } from './userController.js';
import { isAdmin } from '../../middleware/adminMiddleware.cjs';

const router = express.Router();

router.get('/', isAdmin, getAllUsers);          
router.get('/:id', isAdmin, getUserById);      
router.put('/:id', isAdmin, updateUser);       

export default router;
