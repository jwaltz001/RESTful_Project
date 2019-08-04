const express = require("express");
const router = express.Router();
const Wines = require("../models/wines.js");

//host
//GET
    //index
router.get('/' , (req, res) => {
    Wines.find({}, (err, allWines) => {
        res.render('app/index_wines.ejs',
          {
             wines: allWines
          });
    });

});
    //new
router.get("/new", (req,res) => {
    res.render("app/new_wine.ejs");
});
    //show
router.get("/:id", (req,res) => {
    Wines.findById(req.params.id, (err,foundWine) => {
        res.render("app/show_wine.ejs",
        {
            wine: foundWine
        });
    });
});
//POST
    //create
router.post("/", (req,res) => {
    if (req.body.buyAgain === "on") {
        req.body.buyAgain = true;
    }else{
        req.body.buyAgain = false;
    }
    Wines.create(req.body, (err, newWine) => {
        res.redirect("/wines");
    });
});


module.exports = router;
