const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectSchema = new Schema(
  {
     proname: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
        
      }
      ,
      photo: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

const Projects = mongoose.model('Projects', ProjectSchema);

module.exports = Projects;
