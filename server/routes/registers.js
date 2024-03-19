const router = require("express").Router();
const User = require("../models/User");
const Register= require("../models/Registers");  
router.post("/create", async (req, res) => {
  const newRegister = new Register(req.body);
  try {
    const savedRegister = await newRegister.save();
    res.status(200).json(savedRegister);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get Single post
router.get("/get/:id", async (req, res) => {
  try {
    const singleregister = await Register.findById(req.params.id);
    res.status(200).json(singleregister);
  } catch (err) {
    console.error('Error in /api/register/create:', error);
    res.status(500).json(err);
  }
});
//UPDATE POST
router.put("/update/:id", async (req, res) => {
  try {
    const register = await Register.findById(req.params.id);
    if (register.username === req.body.username) {
      try {
        const updatedRegister= await Register.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedRegister);
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
    const register = await Register.findById(req.params.id);
    if (register.username === req.body.username) {
      try {
        await Register.findByIdAndDelete(req.params.id);
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
router.get('/allregisters', async (req, res) => {
    try {
      const registers = await Register.find();
      res.status(200).json(registers);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
