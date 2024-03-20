const mongoose = require('mongoose');
const { Schema } = mongoose;

const ServiseSchema = new Schema(
  {
      title: {
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

const Servises = mongoose.model('Servises', ServiseSchema);

module.exports = Servises;
