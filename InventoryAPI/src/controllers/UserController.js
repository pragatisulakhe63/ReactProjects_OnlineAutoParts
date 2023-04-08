const User = require("../models/User");

exports.addUser = (req, res) => {
    const userData = new User({
        userName: req.body.name,
        userEmail: req.body.email,
        userMobile: req.body.mobile,
        userPassword: req.body.password,
    });
    console.log(req.body);
    userData
        .save()
        .then((addedUser) => {
            res.status(200).json(addedUser);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });

};

exports.getUserByEmail = (req, res) => {
    const email = req.body.userEmail
    User.find({ userEmail: email })
        .then((userData) => {
            res.status(200).json(userData);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

exports.allusers = (req, res) => {
    User.find()
        .then((allusers) => {
            res.status(200).json(allusers);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

exports.getUser = (req, res) => {
    User.findById(req.params.userId)
        .then((getuser) => {
            res.status(200).json(getuser)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
};

exports.deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then((deleteuser) => {
            res.status(200).json(deleteuser)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
};
exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(
        req.params.userId,
        {
            userName: req.body.name,
            userEmail: req.body.email,
            userMobile: req.body.mobile,
            userPassword: req.body.password,
        },
        { new: false }

    )
        .then((updatedUser) => {
            res.status(200).json(updatedUser);
        })
        .catch((err) => {
            res.status(500).send("Update Fails...")
        });
};