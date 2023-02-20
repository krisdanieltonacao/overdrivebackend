const mongoose = require ("mongoose");
const userSchema = new mongoose.Schema({
      email: {
            type: String,
            required: [true, "Email is required."]
      },
      password: {
            type: String,
            required: [true, "Password is required."]
      },
      firstName: {
            type: String,
            required: [true, "First Name is required."]
      },
      lastName: {
            type: String,
            required: [true, "Last Name is required."]
      },
      mobileNo: {
            type: String,
            required: [true, "Mobile Number is required."]
      },
      address:{type: String},
      birthDate: {type: Date},
      licenseNo:{type: String},
      licenseExp:{type: String},
      vehicleType:{type: String},
      vehiclePlate:{type: String},
      eWallet: {type: String},
      accountNo: {type: String},
      position: {type: String}, // admin, dispatcher, rider
      isAdmin: {
            type: Boolean,
            default: false,
      },
      createdOn:{
            type: Date,
            default: new Date()
      },
      cargoes: [{
            dispatchNo: {type: String},
            dispatchOn: {type: Date},
            createdOn: {
                  type: Date,
                  default: new Date()
            }
      }]
})

module.exports = mongoose.model("User", userSchema);