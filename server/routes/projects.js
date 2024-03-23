const router = require("express").Router();
const User = require("../models/User");
const Project = require("../models/Projects");


//CREATE POST
router.post("/create", async (req, res) => {
  const newProject = new Project(req.body);
  try {
    const savedProject = await newProject.save();
    res.status(200).json(savedProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get Single post
router.get("/get/:id", async (req, res) => {
  try {
    const singleproject = await Project.findById(req.params.id);
    res.status(200).json(singleproject);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE POST
router.put("/update/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.username === req.body.username) {
      try {
        const updatedProject = await Project.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProject);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/delete/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.username === req.body.username) {
      try {
        await Project.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get('/allprojects', async (req, res) => {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
