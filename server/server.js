const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const eventRoute = require("./routes/events");
const userRoute = require("./routes/userRoutes");
const projectRoute = require("./routes/projects");
const serviceRoute = require("./routes/services");
const messageRoute = require("./routes/messages");
const registerRoute = require("./routes/registers"); // Corrected import path
const auth = require("./middleware/auth");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const membersRoute = require("./routes/members");
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // Serving static files from the "public" directory
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use("/images", express.static(path.resolve(__dirname, "src/images")));

// Routes
mongoose
  // .connect("mongodb://127.0.0.1:27017/Techinoclub")
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });

// File upload route
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// API routes
app.use("/api", userRoute);
app.use("/api", authRoutes);
app.use("/api/events", eventRoute);
app.use("/api/projects", projectRoute);
app.use("/api/services", serviceRoute);
app.use("/api/members", membersRoute);
app.use("/api/registers", registerRoute);
app.use("/api/messages", messageRoute);

// Start server
const port = process.env.PORT || 3000;
app.listen(port,() => {
  console.log(`Server running on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("Deployment successful! Your server is up and running.");
});