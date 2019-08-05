const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/users.js");

//GET
router.get("/new", (req,res) => {
    res.render("users/new_user.ejs");
});

//POST
router.post("/", (req,res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, newUser) => {
        res.redirect("/");
    });
});

module.exports = router;
