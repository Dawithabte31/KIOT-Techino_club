const mongoose = require('mongoose');
const { Schema } = mongoose;


const EventSchema = new Schema(
  {
      title: {
        type: String,
        unique:true,
        required: true,
      },
      desc:{
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

const Events = mongoose.model('Events', EventSchema);

module.exports = Events;
