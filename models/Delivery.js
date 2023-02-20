const mongoose = require ("mongoose");
const deliverySchema = new mongoose.Schema({
      dispatchNo: {type: String},
      riderId: {type: String},
      riderName: {type: String},
      parcelsOnHand: [
            {
                  trackingNo: {type: String},
                  consigneeName: {type: String},
                  consigneeMobile: {type: String},
                  address: {type: String},
                  packageSize: {type: String},
                  quantity: {type: String},
                  description: {type: String},
                  paymentType: {type: String},
                  totalPrice: {type: String},
                  isDelivered: {type: String}
            }
      ]
      createdOn: {
            type: Date,
            default: new Date()
      }
})
module.exports = mongoose.model("Delivery", deliverySchema);