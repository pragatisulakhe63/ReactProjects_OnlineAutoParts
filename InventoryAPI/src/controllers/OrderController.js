const OrderSchema = require("../models/Order");

exports.addOrder = (req, res)=>{
    const  orderData = new OrderSchema({
        orderDate: req.body.date,
        orderAmount: req.body.amount,
        noOfItems: req.body.noofitems,
        orderItems: req.body.items,
        customerId: req.body.custmerid,
        
    });
    console.log(req.body);
    orderData
     .save()
     .then((addedOrder)=>{
         res.status(200).json(addedOrder);
     })
     .catch((err)=>{
         res.status(500).json({error:err});
     });
};
exports.allOrder = (req, res)=>{
    OrderSchema.find()
    .populate("customerId")
    .then((allOrders)=>{
        res.status(200).send(allOrders);
    })
    .catch((err)=>{
        res.status(500).send(err);
    });
};
exports.getOrder = (req, res) => {
    OrderSchema.findById(req.params.orderId)
        .then((getOrder) => {
            res.status(200).json(getOrder)
        })
        .catch((err) => {
            res.status(500).send(err)
        });
};
exports.deleteOrder =(req,res)=>{
    OrderSchema.findByIdAndRemove(req.params.orderId)
      .then((deletedOrder) => {
          res.status(200).json(deletedOrder)
      })
      .catch((err)=>{
          res.status(500).send(err)
      })
};

exports.updateOrder = (req,res)=>{
    OrderSchema.findByIdAndUpdate(
        req.params.orderId,
        {
            orderDate: req.body.date,
            orderAmount: req.body.amount,
            noOfItems: req.body.noofitems,
             
        },
        {new: false}
    )
     .then((updatedOrder)=>{
         res.status(200).json(updatedOrder);
     })
     .catch((err)=>{
         res.status(500).send("Update Fails...",err)
     });
};