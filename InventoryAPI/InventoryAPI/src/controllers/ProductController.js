const res = require("express/lib/response");
const Product = require("../models/Product");

exports.addProduct = (req, res) => {
    const productData = new Product({
        productCompany: req.body.productcompany,
        productTypes: req.body.producttypes,
        vehicleModel: req.body.vehiclemodel,
        productPrize: req.body.productprize,
        Description: req.body.description,
        Image: req.body.image,
    });
    console.log(req.body);
    productData
        .save()
        .then((addedProduct) => {
            res.status(200).json(addedProduct);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

exports.allProduct = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.status(200).json(allProducts);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};
exports.getProduct = (req,res)=>{
    Product.findById(req.params.productDataId)
    .then((productData)=>{
        res.status(200).json(productData)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
};
exports.deleteProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.productDataId)
        .then((deleteproductData) => {
            res.status(200).json(deleteproductData)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
};

exports.updateProduct = (req, res) =>{
    Product.findByIdAndUpdate(
        req.params.productDataId,
        {
            productPrize: req.body.productprize, 
        },
        {new: false}
        )
    .then((updatedproduct)=>{
        res.status(200).json(updatedproduct)
    })
    .catch((err)=>{
        res.status(500).send("Update Fails...")
    })
};