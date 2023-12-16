const express = require("express");
const router = express.Router();
const studentModel = require("../models/student_model");
const studentController = require("../controller/student_controler")
router.get("/signup", studentController.getStudentSignUp);
router.get("/login", studentController.getStudentLogin);

router.get("/", studentController.getStudentDashboard);

router.post("/signup", (req, res)=>{
  console.log(req.body);
  let form = new studentModel(req.body)
  form.save()
  .then((res)=>{
    console.log(res);
    res.redirect("student_login_page")
  }).then((err)=>{
    console.log("I no know where u dey carry me go instead of mongo");
    console.log(err);
  })
})

// app.post("/signup", (req, res) => {
//   // console.log(req.body);
//   let form = new studentModel(req.body);
//   form
//     .save()
//     .then(() => {
//       // res.render("signin")
//       res.redirect("/signin");
//       console.log("succesful");
//     })
//     .catch((error) => {
//       res.render("signup", { message: "this was not done successful" });
//       console.log("You have input error prob");
//       console.log(error);
//     });
// });
module.exports = router;