const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const auth = require("../auth");

//Checks User Email Already Exists - OK
router.post("/checkEmail", (req,res)=>{
      userControllers.checkEmailExists(req.body).then(resultFromControllers=>res.send(resultFromControllers));
});


//Register User - OK
router.post("/register", (req, res)=>{
      userControllers.registerUser(req.body).then(resultFromControllers => res.send(resultFromControllers));
});


// Login - OK
router.post("/login", (req,res)=>{
      userControllers.loginUser(req.body).then(resultFromControllers => res.send(resultFromControllers));
});

//Edit User - OK
router.put("/edit", auth.verify, (req,res)=>{
      const userData = auth.decode(req.headers.authorization);
      userControllers.updateUserDetails(userData, req.body).then(resultFromControllers => res.send(resultFromControllers));
});


//Add Cargoes to Rider


module.exports = router;
