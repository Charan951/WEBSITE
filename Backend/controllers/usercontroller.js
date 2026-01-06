const User=require('../models/User');
const bcrytjs=require('bcryptjs');

const createUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;


        const hashedPassword=await bcrytjs.hash(password,10);

        const newUser=new User({
            name,
            email,
            password:hashedPassword
        });     

        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({message:'Error creating user',error:error.message});
    }   
};

const getUserById=async(req,res)=>{
    try {
        const userId=req.params.id; 

        const user=await User.findById(userId);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:'Error fetching user',error:error.message});
    }   
};

const getallUsers=async(req,res)=>{
    try {
        const users=await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:'Error fetching users',error:error.message});
    }   
};

const updateUser=async(req,res)=>{
    try {
        const userId=req.params.id;
        const {name,email,password}=req.body;
        const hashedPassword=await bcrytjs.hash(password,10);

        const updatedUser=await User.findByIdAndUpdate( userId,
            {
                name,
                email,
                password:hashedPassword
            },
            {new:true}
        );
        res.status(200).json(updatedUser);  
    } catch (error) {
        res.status(500).json({message:'Error updating user',error:error.message});
    }

};
const deleteUser=async(req,res)=>{
    try {
        const userId=req.params.id;
       const deletedUser= await User.findByIdAndDelete(userId);
         res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({message:'Error deleting user',error:error.message});
    }   
};
module.exports={
    createUser,
    getUserById,
    getallUsers,
    updateUser,
    deleteUser
};