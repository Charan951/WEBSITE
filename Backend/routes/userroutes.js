
const express = require('express');
const router=   express.Router();
const { createuser, getAllUsers,getUserById,updateUser,deleteUser } = require('../controllers/usercontroller');  // import controller functions

router.post('/user-create', createuser);  // Route to create a new user
router.get('/get-all-users', getAllUsers); // Route to get all users
router.get('/get-user-by-id/:id', getUserById); // Route to get a user by ID
router.put('/update-user/:id', updateUser); // Route to update a user
router.delete('/delete-user/:id', deleteUser); // Route to delete a user

module.exports = router;
