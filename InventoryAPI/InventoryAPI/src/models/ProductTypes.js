const mongoose = require("mongoose");

const ProductTypesSchema = mongoose.Schema({
    productTypes:String,
});
module.exports = mongoose.model("ProductTypes", ProductTypesSchema);
