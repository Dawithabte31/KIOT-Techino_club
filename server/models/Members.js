const mongoose = require('mongoose');
const { Schema } = mongoose;



const MemberSchema = new Schema(
  {
      fullname: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

const Members = mongoose.model('Members', MemberSchema);
module.exports = Members;
