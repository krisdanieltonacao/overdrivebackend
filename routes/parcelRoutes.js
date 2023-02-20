const express = require("express");
const router = express.Router();
const parcelControllers = require("../controllers/parcelControllers");
const auth = require("../auth");

//Add a parcel
router.post("/add",(req,res)=>{
      parcelControllers.addParcel(req.body).then(resultFromController => res.send(resultFromController));
});

//Edit Parcel Details

//Returned Parcel from Delivery

//Search Parcel by Tracking Number

// Search by Delivery Manifest Number

// Search Not Yet Delivered


module.exports = router;
