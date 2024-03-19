const mongoose = require('mongoose');
const { Schema } = mongoose;



const RequestSchema = new Schema(
  {   
      fullname: {
        type: String,
        required: true,
      },
      age:{
        type: Number,
        required: true,
      },
      sex:{
        type: String,
        required: true,
      },
      email:{
        type: String,
        required: true,
      },
      departement:{
        type: String,
        required: true,
      },
      skill: {
        type: String,
        required: true,
      },
      why: {
        type: String,
        required: true,
      },
      status:{
        type:String,
        default:"pendding",
      }
  },
  { timestamps: true }
);

const Registers = mongoose.model('Registers', RequestSchema);
module.exports = Registers;