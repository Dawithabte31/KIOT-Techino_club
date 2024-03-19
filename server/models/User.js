const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt =require ("jsonwebtoken");


const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confPassword:{
        type: String,
        required: true,
    },
    role:{
        type:Number,
        default:0
    }
  },
  { timestamps: true }
);
UserSchema.methods.getJwtToken = function (){
  return jwt.sign({id: this._id}, process.env.JWT_SECRET,{
      expiresIn: 3600
  });
}

module.exports = mongoose.model("User", UserSchema);
