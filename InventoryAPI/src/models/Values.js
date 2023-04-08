const mongoose = require("mongoose");

const ValuesSchema = mongoose.Schema(
    {
        companyName:Array,
        productTypes:Array,
        vehicleModel:Array,
    }
);

module.exports = mongoose.model("Values",ValuesSchema);