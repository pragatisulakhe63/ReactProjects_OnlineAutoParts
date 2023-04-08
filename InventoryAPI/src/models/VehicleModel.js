const mongoose = require("mongoose");

const vehicleModelSchema = mongoose.Schema(
    {
        vehicleModel:String,
    }
);

module.exports = mongoose.model("VehicleModel",vehicleModelSchema);
