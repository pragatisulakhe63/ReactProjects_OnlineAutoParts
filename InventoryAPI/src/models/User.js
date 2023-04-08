const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema(
    {
        userName: String,
        userEmail: String,
        userMobile: String,
        userPassword:String
    }
);

module.exports = mongoose.model("User", UserSchema);