const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const app = express();



app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const imageStorage = multer.diskStorage({
    destination: "Image",
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});

const imageUpload = multer({
    storage: imageStorage,

    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg|jfif)$/)) {
            return cb(new Error("Please Upload a Image......"));
        }
        cb(undefined, true);
    },
});



mongoose
    .connect("mongodb://localhost:27017/inventory-db", {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log("Not Connected", err);
    });


app.post(
    "/uploadimage",
    imageUpload.single("image"),
    (req, res) => {
        res
            .status(200)
            .json({ filepath: "/images/".concat(req.file.filename), uploaded: true });
    },
    (err, req, res, next) => {
        res.status(400).send({ error: err.message });
    }
);

require("./src/routes/UserRoutes")(app);
require("./src/routes/CustomerRoutes")(app);
require("./src/routes/ValuesRoutes")(app);
require("./src/routes/ProductRoutes")(app);
require("./src/routes/OrderRoutes")(app);

app.use(express.static("Image"));
app.use("/images", express.static("Image"));

app.listen(5000, () => {
    console.log("Server Started.......");
});
