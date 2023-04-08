module.exports = (app) => {
    const UserController = require("../controllers/UserController");

    app.post("/adduser", UserController.addUser);
    app.get("/allusers", UserController.allusers);
    
    app.post("/getuserbyemail", UserController.getUserByEmail);
    
    app.get("/getuser/:userId", UserController.getUser);
    app.delete("/deleteuser/:userId", UserController.deleteUser);
    app.put("/updateuser/:userId", UserController.updateUser);
};