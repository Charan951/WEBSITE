const User = require('../models/User');   // model import
// Create a new user



const createuser=async(req,res)=>{
    try {
        const { name, email, password, address, phone } = req.body;    // getting data from user or frontend 

        const newUser = new User({     // creating new user object
            name,
            email,
            password,
            address,
            phone
        });
        const savedUser = await newUser.save();  // saving user to database
        res.status(201).json(savedUser);   // sending response back to frontend
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};


// Get all users
const getAllUsers=async(req,res)=>{
    try {
        const users = await User.find();   // fetching all users from database
        res.status(200).json(users);       // sending users data as response
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};
module.exports={createuser,getAllUsers};
