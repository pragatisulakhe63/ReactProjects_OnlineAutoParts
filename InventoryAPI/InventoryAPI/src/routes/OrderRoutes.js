module.exports = (app)=>{
    const OrderController = require("../controllers/OrderController");

    app.post("/addorder",OrderController.addOrder);
    app.get("/allorder",OrderController.allOrder);
    app.get("/getorder/:orderId",OrderController.getOrder);
    app.delete("/deleteorder/:orderId",OrderController.deleteOrder);
    app.put("/updateorder/:orderId", OrderController.updateOrder);
   
}