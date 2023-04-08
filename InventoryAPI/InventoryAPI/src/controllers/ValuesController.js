const res = require("express/lib/response");
const ProductTypes = require("../models/ProductTypes");
const Company = require("../models/Company");
const Values = require("../models/Values");
const VehicleModel = require("../models/VehicleModel");

// exports.addValues =(req,res)=>{
//     const valuesData = new Values({
//         companyName:req.body.companyname,
//         productTypes:req.body.producttypes,
//         vehicleModel:req.body.vehiclemodel, 
//     });
//     console.log(req.body);
//     valuesData
//             .save()
//             .then((addedValues)=>{
//                 res.status(200).json(addedValues);
//             })
//             .catch((err)=>{
//                 res.status(500).json({error:err});
//             });
// };

// exports.allValues=(req,res)=>{
//     Values.find()
//         .then((allValues)=>{
//             res.status(200).json(allValues);
//         })
//         .catch((err)=>{
//             res.status(500).send(err);
//         });
// };

exports.addCompany = (req,res)=>{
    const companyData = new Company({
        companyName:req.body.companyname,
    })
    console.log(req.body);
    companyData
            .save()
            .then((addedCompany)=>{
                res.status(200).json(addedCompany);
            })
            .catch((err)=>{
                res.status(500).json({error:err});
            });
};

exports.allCompany = (req,res)=>{
    Company.find()
    .then((allCompany)=>{
        res.status(200).json(allCompany);
    })
    .catch((err)=>{
        res.status(500).send(err);
    });
};

exports.deleteComapny = (req,res)=>{
    Company.findByIdAndRemove(req.params.companyDataId)
    .then((deletecomapny)=>{
        res.status(200).json(deletecomapny)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
};


exports.addProdctTypes = (req,res)=>{
    const producttypesData = new ProductTypes({
        productTypes:req.body.producttypes,
    });
    console.log(req.body);
    producttypesData
        .save()
        .then((addedProductTypes)=>{
            res.status(200).json(addedProductTypes);
        })
        .catch((err)=>{
            res.status(500).json({error:err});
        });
}
exports.allProductTypes= (req,res)=>{
    ProductTypes.find()
    .then((allProductTypes)=>{
        res.status(200).json(allProductTypes);
    })
    .catch((err)=>{
        res.status(500).send(err);
    });
};

exports.deleteProductTypes = (req,res)=>{
    ProductTypes.findByIdAndRemove(req.params.producttypesId)
    .then((deleteProductTypes)=>{
        res.status(200).json(deleteProductTypes)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
};
exports.addVehicleModel = (req,res)=>{
    const vehiclemodelData = new VehicleModel({
        vehicleModel:req.body.vehiclemodel,
    });
    console.log(req.body);
    vehiclemodelData
        .save()
        .then((addedVehicleModel)=>{
            res.status(200).json(addedVehicleModel);
        })
        .catch((err)=>{
            res.status(500).json({error:err});
        });
};

exports.allVehicleModel =( req,res)=>{
    VehicleModel.find()
    .then((allVehicleModel)=>{
        res.status(200).json(allVehicleModel);
    })
    .catch((err)=>{
        res.status(500).send(err);
    });
};

exports.deleteVehicleModel = (req,res)=>{
    VehicleModel.findByIdAndRemove(req.params.vehiclemodeId)
    .then((deleteVehicleModel)=>{
        res.status(200).json(deleteVehicleModel)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
};