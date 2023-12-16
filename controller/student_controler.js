const getStudentSignUp = (req, res)=>{
  res.render("student_signup")
};
const getStudentLogin = (req, res)=>{
  res.render("student_login_page")
};
const getStudentDashboard = (req, res)=>{
  res.render("student_dashboard")
}
module.exports = {getStudentSignUp, getStudentLogin, getStudentDashboard};