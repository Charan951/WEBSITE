
const verifyuser=(...roles)=>async(req,res,next)=>{
    if(roles.includes(req.user.role)){
        next();
    }else{
        res.status(403).send('Access denied. You do not have the required permissions.');
    }
};  
module.exports=verifyuser;