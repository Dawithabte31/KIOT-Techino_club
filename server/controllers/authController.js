// authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const ErrorResponse =require('../utils/errorResponse');
const jwt=require('jsonwebtoken')
const cookieParser=require('jsonwebtoken')




exports.register = async (req, res) => {
  try {

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const hashedconfPass =await bcrypt.hash(req.body.confPassword, salt);
     if (!(req.body.password === req.body.confPassword)) {
       return res.status(400).json({ message: "The password does not match!" });}
    else{
      const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      confPassword:hashedconfPass
    });

    const user = await newUser.save();
    res.status(200).json(user);}
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
  
    // !validated && res.status(400).json("Wrong credentials!");
    // const { password, ...others } = user._doc;
    // res.status(200).json(others);
    if(!validated){
      return next(new ErrorResponse("invalid credentials",400));
    }

    sendTokenResponse(user,200,res);  


    
  } catch (err) {
    res.status(500).json(err);
  }
};




const sendTokenResponse = async (user,codeStatus,res)=>{
    const token = await user.getJwtToken();
    res
    .status(codeStatus)
    .cookie('token',token,{maxAge: 60*60*1000,httpOnly:true})
    .json({success: true, token,user})
    }
    
  // logout
  exports.logout=(req,res,next)=> {
    res.clearCookie('token');
    res.status(200).json({
      success: true,
      message:"Logged out"
    })
  }
  exports.userProfile= async(req,res,next)=> {
    const user = await User.findById(req.user.id).select('-password');

    res.status(200).json({
      success : true,
      user
    })
   
  } 