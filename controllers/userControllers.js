const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../auth");

//Checks User Email Already Exists - OK
module.exports.checkEmailExists = (reqBody) =>{
      return User.find({email: reqBody.email}).then(result=>{
            if(result.length>0){
                  return true;
            }
            else{
                  return false;
            }
      })
}

// User registration - OK
module.exports.registerUser = (reqBody)=>{
      let newUser = new User({
            email: reqBody.email,
            password: bcrypt.hashSync(reqBody.password, 10),
            firstName: reqBody.firstName,
            lastName: reqBody.lastName,
            mobileNo: reqBody.mobileNo,
            address: reqBody.address,
            birthDate: reqBody.birthDate,
            licenseNo: reqBody.licenseNo,
            licenseExp: reqBody.licenseExp,
            vehicleType: reqBody.vehicleType,
            vehiclePlate: reqBody.vehiclePlate,
            eWallet: reqBody.eWallet,
            accountNo: reqBody.accountNo,
            position: reqBody.position
      })
      return newUser.save().then((user, error)=>{
            if(error){
                  return false;
            }
            else{
                return(`${newUser.email} is registered successfully`); // change later to return true
            }
      })
}

// Login - OK
module.exports.loginUser = (reqBody)=>{
      return User.findOne({email: reqBody.email}).then(result =>{
            if(result == null){
                  return false
            }
            else{
                  const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);
                  if(isPasswordCorrect){
                        return {access: auth.createAccessToken(result)}
                  }
                  else{
                        return false;
                  }
            }
      })
}

// Edit User Details - OK
module.exports.updateUserDetails = (userData, reqBody)=>{
      let updatedDetails = {
            firstName: reqBody.firstName,
            lastName: reqBody.lastName,
            mobileNo: reqBody.mobileNo,
            address: reqBody.address,
            birthDate: reqBody.birthDate,
            licenseNo: reqBody.licenseNo,
            licenseExp: reqBody.licenseExp,
            vehicleType: reqBody.vehicleType,
            vehiclePlate: reqBody.vehiclePlate,
            eWallet: reqBody.eWallet,
            accountNo: reqBody.accountNo,
            position: reqBody.position
      }
      return User.findByIdAndUpdate(userData.id, updatedDetails).then((userUpdate, error) =>{
      if(error){
            return false;
      }
      else{
            return true;
      }
      });
};