const express = require("express");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT || 5000;
const ejs = require("ejs");
app.set("view engine", "ejs");
const mongoose = require("mongoose");
app.use(express.urlencoded({extended:true}))

let URI = process.env.MONGO_URI;
const studentRouter = require("./routes/student.route"); // StudentRouter import from router folder

mongoose.connect(URI)
.then((res)=>{
  console.log("Mongoose has connected");
  // console.log(res);
})
.catch((err)=>{
  console.log("Mongoose can't connect");
  console.log(err);
});
app.get("/", (req, res)=>{
  res.render("landing_page")
});

app.use("/student", studentRouter);

app.listen(PORT, ()=>{
  console.log("app is listening @ port " + PORT);
})
