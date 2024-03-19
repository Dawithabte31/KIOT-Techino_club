const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


exports.isAuthenticated = async(req,res,next) =>{
   
const {token}=req.cookies;
console.log('Received token:', req.cookies);
if (!token){
return next(new ErrorResponse('not authorized to access this route',401));

}
try {
    const decoded =jwt.verify(token,process.env.JWT_SECRET);
    req.user= await User.findById(decoded.id);
    next();
} catch (error) {
    return next(new ErrorResponse('not authorizerd to acces this route',401));
}
}

exports.isAdmin=(req,res,next)=>{
    if(req.user.role === 0){
        return next(new ErrorResponse("You don't have admin rights",401))
        
    }
    next();
}


//middleware for the admin