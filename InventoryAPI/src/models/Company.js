const mongoose = require("mongoose");
const Company = require("mongoose")
const Schema = mongoose.Schema;

const CompanySchema = mongoose.Schema(
    {
        companyName:String,
        
    }
);
module.exports = mongoose.model("company", CompanySchema)