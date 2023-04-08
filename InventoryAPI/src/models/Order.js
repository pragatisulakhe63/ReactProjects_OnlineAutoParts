const mongoose = require ("mongoose");

const OrderSchema = mongoose.Schema(
    {
        orderDate: Date,
        orderAmount: Number,
        noOfItems: Number,
        customerId: {type: mongoose.Schema.Types.ObjectId, ref:"Customer"},
        orderItems: Array,
    }
);

module.exports = mongoose.model("Order", OrderSchema);