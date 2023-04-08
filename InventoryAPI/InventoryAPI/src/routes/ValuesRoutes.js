module.exports = (app)=>{
    const ValuesController = require("../controllers/ValuesController");
 
    // app.post("/addvalues",ValuesController.addValues);
    // app.get("/allvalues",ValuesController.allValues);

    app.post("/addCompany", ValuesController.addCompany);
    app.get("/allCompany",ValuesController.allCompany);
    app.delete("/deleteComapny/:companyDataId",ValuesController.deleteComapny);
    
    app.post("/addProdctTypes",ValuesController.addProdctTypes);
    app.get("/allProductTypes",ValuesController.allProductTypes);
    app.delete("/deleteProductTypes/:producttypesId",ValuesController.deleteProductTypes);

    app.post("/addVehicleModel",ValuesController.addVehicleModel);
    app.get("/allVehicleModel",ValuesController.allVehicleModel);
    app.delete("/deleteVehicleModel/:vehiclemodeId",ValuesController.deleteVehicleModel);
};