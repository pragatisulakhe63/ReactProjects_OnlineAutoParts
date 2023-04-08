const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const CustomerSchema = mongoose.Schema({
    customerFullName:{type:String},
    customerAddress:{type:String},
    customerCity:{type:String},
    customerMobileNo:{type:Number},
    customerPincode:{type:Number},
    customerState:{type:String},
    user:{type:Schema.Types.ObjectId, ref:"User"},

});

module.exports = mongoose.model("Customer", CustomerSchema);