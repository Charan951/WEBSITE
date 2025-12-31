
const express = require('express');
const router=   express.Router();
const { createuser, getAllUsers } = require('../controllers/usercontroller');  // import controller functions

router.post('/user-create', createuser);  // Route to create a new user
router.get('/get-all-users', getAllUsers); // Route to get all users

module.exports = router;