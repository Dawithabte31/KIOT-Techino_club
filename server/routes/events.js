const router = require("express").Router();
const Event = require("../models/Events");
//CREATE POST
router.post("/create", async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (err) {
    res.status(500).json(err);
  }
});


//getSingle event
router.get("/get/:id", async (req, res) => {
  try {
    const singleevent = await Event.findById(req.params.id);
    res.status(200).json(singleevent);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE event
router.put("/update/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event.username === req.body.username) {
      try {
        const updatedEvent = await Event.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedEvent);
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

//DELETE events
router.delete("/delete/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event.username === req.body.username) {
      try {
        await Event.findByIdAndDelete(req.params.id);
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

//GET ALL events

router.get('/allevents', async (req, res) => {
    try {
      const events = await Event.find();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json(error);
    }
  });



module.exports = router;
