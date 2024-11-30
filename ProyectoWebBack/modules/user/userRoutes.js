import express from 'express';
import { getAllUsers, getUserById, updateUser } from './userController.js';
import { isAdmin } from '../auth/adminMiddleware.js';

const routerUser = express.Router();

routerUser.get('/', isAdmin, getAllUsers);          
routerUser.get('/:id', isAdmin, getUserById);      
routerUser.put('/:id', isAdmin, updateUser);       

export default routerUser;
