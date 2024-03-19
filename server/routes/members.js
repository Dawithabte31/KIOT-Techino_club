const router = require("express").Router();
const User = require("../models/User");
const Member = require("../models/Members");
//CREATE POST
router.post("/create", async (req, res) => {
  const newMember = new Member(req.body);
  try {
    const savedMember = await newMember.save();
    res.status(200).json(savedMember);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get Single post
router.get("/get/:id", async (req, res) => {
  try {
    const singlemember = await Member.findById(req.params.id);
    res.status(200).json(singlemember);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE POST
router.put("/update/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (member.username === req.body.username) {
      try {
        const updatedMember = await Member.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedMember);
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
    const member = await Member.findById(req.params.id);
    if (member.username === req.body.username) {
      try {
        await Member.findByIdAndDelete(req.params.id);
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
router.get('/allmembers', async (req, res) => {
    try {
      const members = await Member.find();
      res.status(200).json(members);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
