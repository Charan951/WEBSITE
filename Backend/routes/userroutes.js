
const express = require('express');
const router=   express.Router();
const { createUser, getUserById, getallUsers, updateUser, deleteUser } = require('../controllers/usercontroller');

router.post('/create', createUser);  // Route to create a new user
router.get('/getall', getallUsers); // Route to get all users
router.get('/getid/:id', getUserById); // Route to get a user by ID
router.put('/update/:id', updateUser); // Route to update a user
router.delete('/delete/:id', deleteUser); // Route to delete a user

module.exports = router;
