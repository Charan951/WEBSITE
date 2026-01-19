const User=require('../models/Usermodel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


const registerUser=async(req,res)=>{
    try{
        const {name,role,password}=req.body;
        
         const hashedPassword=await bcrypt.hash(password,10);
         const user=new User({name,role,password:hashedPassword});
         await user.save();
         res.status(201).json({user,message:'User registered successfully'});
         
    }catch(error){
        res.status(500).json({message:'Server error'});
    }
};
const loginUser=async(req,res)=>{
    try{
        const {name,password}=req.body;
        const user=await User.findOne({name});
        if(!user){
            return res.status(400).json({message:'please register first'});
        }
        const isMatch=await bcrypt.compare(password,user.password); // Compare passwords req and db passords
        if(!isMatch){
            return res.status(400).json({message:'Invalid credentials'});
        }
        const token=jwt.sign({userId:user._id,role:user.role},process.env.JWT_SECRET);
        res.status(200).json({token,message:'Login successful'});
    }catch(error){
        res.status(500).json({message:'Server error'});
    }   
};

module.exports={registerUser,loginUser};
