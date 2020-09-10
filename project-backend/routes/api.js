const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const admin = require("../model/adminUser");

router.get("/", (req, res) => {
    res.send("from API route");
});

//verification of token before registration
router.post("/register", verifyToken, (req, res) => {
    let userData = req.body;
    let user = new admin(userData);

    admin.findOne({
        email: userData.email
    }, (error, data) => {
        if (error) {
            res.status(500).json({ message: "Request Not Implemented" });
        } else if (data) {

            res.status(401).json({ message: "Already registered with this email id." });
        } else {
            user.save((error, data1) => {
                if (error) {
                    res.status(500).json({ message: "Request Not Implemented" });
                } else {
                    // authentication
                    let payload = {
                        subject: data1._id
                    };
                    let token = jwt.sign(payload, "registerKey");

                    res.status(200).send({ token: token, message: "Added Successfully!!!" });
                }
            });
        }
    });
});

//login admin
router.post("/login", (req, res) => {
    let userData = req.body;
    admin.findOne({
        email: userData.email
    }, (error, data) => {
        if (error) {
            res.status(500).json({ message: "Internal Server Error." });
        } else {
            if (!data) {
                res.status(401).json({ message: "Invalid email." });
            } else {
                if (data.password !== userData.password) {
                    res.status(401).json({ message: "Invalid Password." });
                } else {

                    let payload = {
                        subject: data._id
                    };
                    let token = jwt.sign(payload, "registerKey");
                    res.status(200).send({ token: token, message: "LoggedIn!!!" });
                }
            }
        }
    });
});

//get all admin details
router.get("/allUsers", verifyToken, (req, res) => {
    admin.find({}, (err, data) => {
        if (err) {
            res.status(500).json({ message: "Requset not Implemented." });
        }
        else {
            if (data === null) {
                res.status(204).json({ message: "No data available." });
            }
            else {

                res.status(200).json(data);
            }
        }
    });
});

router.post("/deleteUser", (req, res) => {
    let userData = req.body;

    admin.findOneAndDelete({
        email: userData.email
    }, (error, data) => {
        if (error) {
            res.status(500).json({ message: "Request Not Implemented. Try Again!!!" });
        } else {
            res.status(200).json({ message: "Removed Successfully..." });
        }
    });
});

//middleware to verify token
function verifyToken(req, res, next) {

    if (!req.headers.authorization) {
        return res.status(401).json({ message: "unauthorized request" });
    }
    let token = req.headers.authorization.split(" ")[1];
    if (token === "null") {
        return res.status(401).json({ meassage: "unauthhorized request" });
    }
    let payload = jwt.verify(token, "registerKey");
    if (!payload) {
        return res.status(401).json({ message: "unauthorized request" });
    }
    req.userId = payload.subject;
    next();
}

module.exports = router;