const router = require("express").Router();
const Message = require("../models/Messages");



//CREATE POST
router.post("/create", async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get Single post

router.get("/get/:id", async (req, res) => {
  try {
    const singlemessage = await Message.findById(req.params.id);
    res.status(200).json(singlemessage);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE POST

router.put("/update/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (message.username === req.body.username) {
      try {
        const updatedMessage = await Message.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedMessage);
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
    const message = await Message.findById(req.params.id);
    if (message.username === req.body.username) {
      try {
        await Message.findByIdAndDelete(req.params.id);
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

router.get("/allmessages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
