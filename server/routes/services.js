const router = require("express").Router();
const Service = require("../models/Services");
//CREATE POST
router.post("/create", async (req, res) => {
  const newService = new Service(req.body);
  try {
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (err) {
    res.status(500).json(err);
  }
});

//getSinglepost
router.get("/get/:id", async (req, res) => {
  try {
    const singleservice = await Service.findById(req.params.id);
    res.status(200).json(singleservice);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE POST
router.put("/update/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service.username === req.body.username) {
      try {
        const updatedService = await Service.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedService);
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
    const service = await Service.findById(req.params.id);
    if (service.username === req.body.username) {
      try {
        await Service.findByIdAndDelete(req.params.id);
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
router.get("/allservices", async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
