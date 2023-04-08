const res = require("express/lib/response");
const Customers =  require("../models/Customer");

exports.addcustomers = (req,res)=>{
    const userCustomer = new Customers({
        customerFullName: req.body.customerfullname,
        customerAddress: req.body.customeraddress,
        customerCity: req.body.customercity,
        customerPincode: req.body.customerpincode,
        customerState:req.body.customerstate,
        customerMobNumber:req.body.customermobno,
        user: req.body.userid,
    });

    userCustomer
            .save()
            .then((addedCustomers)=>{
                res.status(200).json(addedCustomers);
            })
            .catch((err) =>{
                res.status(500).send(err);
            });
};

exports.allcustomers = (req,res)=>{
    Customers.find()
    .then((allcustomers)=>{
        res.status(200).json(allcustomers);
    })
    .catch((err) =>{
        res.status(500).send(err);
    });
};

exports.deletecustomers = (req,res)=>{
    Customers.findByIdAndRemove(req.params.customerId)
        .then((deletecustomers)=>{
            res.status(200).json(deletecustomers)
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
};

