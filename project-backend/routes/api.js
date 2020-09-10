const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const admin = require("../model/adminUser");

router.get("/", (req, res) => {
    res.send("from API route");
});


module.exports = router;