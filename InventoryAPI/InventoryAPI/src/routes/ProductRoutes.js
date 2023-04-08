module.exports =(app)=>{
    const ProductController = require("../controllers/ProductController");

    app.post("/addproduct",ProductController.addProduct);
    app.get("/allproduct",ProductController.allProduct);
    app.get("/getproduct/:productDataId",ProductController.getProduct);

    app.delete("/deleteproductData/:productDataId", ProductController.deleteProduct);
    app.put("/updateproduct/:productDataId",ProductController.updateProduct);
};