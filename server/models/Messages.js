const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema(
  {
       name: {
        type: String,
        required: true,
      },
       email: {
        type: String,
        required: true,
      },
       message:{
        type: String,
        required: true,
      },

  },
  { timestamps: true }
);

const Messages = mongoose.model('Messages', MessageSchema);

module.exports = Messages;
