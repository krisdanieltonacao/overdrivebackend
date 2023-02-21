const express = require("express");
const router = express.Router();
const parcelControllers = require("../controllers/parcelControllers");
const auth = require("../auth");

//Add a parcel
router.post("/add",auth.verify,(req,res)=>{
      const userData = auth.decode(req.headers.authorization);
      if(userData.isAdmin){
      parcelControllers.addParcel(req.body).then(resultFromController => res.send(resultFromController));
      }
      else{
            return false;
      }
});

//Search Parcel by Tracking Number - OK
router.get("/track",(req,res)=>{
      parcelControllers.trackParcel(req.body).then(resultFromController => res.send(resultFromController));
})

//Edit Parcel Details

//Returned Parcel from Delivery

// Search by Delivery Manifest Number

// Search Not Yet Delivered


module.exports = router;
