// const express   =require("express");
// const mongoose  =require("mongoose");
// const cookieParser = require('cookie-parser');
// const app       =express();
// const morgan    = require("morgan");
// const bodyParser= require("body-parser");
// const authRoutes = require("./routes/authRoutes");
// // const userRoutes = require("./routes/userRoutes");
// const eventRoute= require("./routes/events");
// const userRoute = require("./routes/userRoutes");
// const projectRoute= require("./routes/projects");
// const serviceRoute= require("./routes/services");
// const registerRoute = require("./routes/Registers");
// const auth=require("./middleware/auth");
// const path =require("path");
// const multer=require("multer");
// const cors = require('cors');
// const membersRoute=require( "./routes/members");
// require("dotenv").config();

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.use(cookieParser());
// app.use(express.json());

// app.use(cors());

// mongoose.connect('mongodb://127.0.0.1:27017/Techinoclub')
//   .then(() => { console.log('Fucking DB connected'); })
//   .catch((err) => { console.log(err); });
//   const storage= multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "images");
//     },
//     filename: (req, file, cb) => {
//       cb(null, req.body.name);
//     },
//   });

// const upload= multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   res.status(200).json("File has been uploaded");
// });
// app.use(bodyParser.json({ limit: "5mb" }));
// app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

// app.use('/api',userRoute);
// app.use('/api', authRoutes);
// app.use('/api/events', eventRoute);
// app.use('/api/projects',projectRoute);
// app.use('/api/services',serviceRoute);
// app.use('/api/members',membersRoute);
// app.use('/api/registers',registerRoute);

// const port = process.env.PORT || 3000
// app.listen(port,()=>{
//   console.log(`server running on port ${port}`)
// });

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
  .connect("mongodb://127.0.0.1:27017/Techinoclub")
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

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
