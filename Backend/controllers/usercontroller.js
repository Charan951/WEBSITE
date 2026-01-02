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

const getUserById=async(req,res)=>{
    try {
        const userid=req.params.id;
        const user=await User.findById(userid);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

const updateUser=async(req,res)=>{
    try {
        const userid=req.params.id;
        const updatedData=req.body;
        const updatedUser=await User.findByIdAndUpdate(userid,updatedData,{new:true});
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};
const deleteUser=async(req,res)=>{
    try {
        const userid=req.params.id;
        const deletedUser=await User.findByIdAndDelete(userid);
        res.status(200).json(deletedUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};

module.exports={createuser,getAllUsers,getUserById,updateUser,deleteUser};
