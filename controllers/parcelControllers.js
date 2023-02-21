const Parcel = require("../models/Parcel");


module.exports.addParcel = (reqBody)=>{
      console.log(reqBody);
      let newParcel = new Parcel({
            client: reqBody.client,
            dh_id: reqBody.dh_id,
            tracking_number: reqBody.tracking_number,
            order_no: reqBody.order_no,
            consignee_name: reqBody.consignee_name,
            consignee_mobile: reqBody.consignee_mobile,
            consignee_email: reqBody.consignee_email,
            consignee_address: reqBody.consignee_address,
            address_province: reqBody.address_province,
            address_city: reqBody.address_city,
            address_barangay: reqBody.address_barangay,
            payment_type: reqBody.payment_type,
            length: reqBody.length,
            width: reqBody.width,
            height: reqBody.height,
            quantity: reqBody.quantity,
            weight: reqBody.weight,
            volume: reqBody.volume,
            package_size: reqBody.package_size,
            declared_value: reqBody.declared_value,
            total_price: reqBody.total_price,
            description: reqBody.description,
            riderName01: reqBody.riderName01,
            dispatched01: reqBody.dispatched01,
            status01: reqBody.status01,
            riderName02: reqBody.riderName02,
            dispatched02: reqBody.dispatched02,
            status02: reqBody.status02,
            riderName03: reqBody.riderName03,
            dispatched03: reqBody.dispatched03,
            status03: reqBody.status03
      })
      
      return newParcel.save().then((parcel, error)=>{
            if(error){
                  return false;
            }
            else{
                  return true;
            }
      })
}

// Search Tracking Number - OK
module.exports.trackParcel = (reqBody)=>{
      return Parcel.find({tracking_number: reqBody.tracking_number}).then(result=>result);
}

