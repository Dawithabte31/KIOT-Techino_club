const mongoose = require("mongoose");
const { Schema } = mongoose;

const RequestSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    departement: {
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
    status: {
      type: String,
      required: true,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Registers = mongoose.model("Registers", RequestSchema);
module.exports = Registers;
