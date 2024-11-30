const express = require('express');
const { getAllUsers, getUserById, updateUser } = require('./userController');
const { isAdmin } = require('../../middleware/adminMiddleware');

const router = express.Router();

router.get('/', isAdmin, getAllUsers);       
router.get('/:id', isAdmin, getUserById);    
router.put('/:id', isAdmin, updateUser);      

module.exports = router;
