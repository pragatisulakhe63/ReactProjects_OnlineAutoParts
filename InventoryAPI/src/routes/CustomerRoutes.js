module.exports =(app)=>{
    const CustomerController = require("../controllers/CustomerController")

    app.post("/addcustomers",CustomerController.addcustomers);
    app.get("/allcustomers",CustomerController.allcustomers);

    app.delete("/deletecustomers/:customerId",CustomerController.deletecustomers);
};