const mongoose = require ("mongoose");

const OrderSchema = mongoose.Schema(
    {
        orderDate: Date,
        orderAmount: Number,
        noOfItems: Number,
        orderItems: []
    }
);

module.exports = mongoose.model("Order", OrderSchema);