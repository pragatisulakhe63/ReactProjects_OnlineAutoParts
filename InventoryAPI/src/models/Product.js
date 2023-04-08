const { default: mongoose } = require("mongoose");
const Product = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        productCompany: String,
        productTypes: String,
        vehicleModel: String,
        productPrize: Number,
        Description: String,
        Image: String,
    }
);

module.exports = mongoose.model("Product", ProductSchema);