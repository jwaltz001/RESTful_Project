const express = require("express");
const router = express.Router();
const Wines = require("../models/wines.js");
const User = require("../models/users.js");

const navInfo = (id) => {
    return [
        {title:"Home", url:"/"},
        {title:"Wine Journal",url:"/wines"},
        {title:"New", url:"/wines/new"},
        {title:"Entry", url:"/wines/"+id},
        {title:"Edit", url:"/wines/"+id+"/edit"}
    ];
};

//host
//GET
    //index
router.get('/' , (req, res) => {
    User.findById(req.session.currentUser._id, (err,foundUser) => {
        res.render('app/index_wines.ejs',
        {
         user: foundUser,
         tabTitle: navInfo(req.params.id),
         siteMapPosition: 1
        });
    });
});

    //new
router.get("/new", (req,res) => {
    res.render("app/new_wine.ejs",
    {
        user: req.session.currentUser,
        tabTitle: navInfo(req.params.id),
        siteMapPosition: 2,
        subposition: "new"
    });
});

    //show
router.get("/:id", (req,res) => {
    User.findById(req.session.currentUser._id, (err,foundUser) => {
        res.render("app/show_wine.ejs",
        {
            user: req.session.currentUser,
            wine: foundUser.savedWines.id(req.params.id),
            tabTitle: navInfo(req.params.id),
            siteMapPosition: 3,
            subposition: "show"
        });
    });
});

    //edit
router.get("/:id/edit", (req,res) => {
    User.findById(req.session.currentUser._id, (err,foundUser) => {
        //const editingWine = foundUser.savedWines.id(req.params.id);
        res.render("app/edit_wine.ejs",
        {
            user: req.session.currentUser,
            wine: foundUser.savedWines.id(req.params.id),
            tabTitle: navInfo(req.params.id),
            siteMapPosition: 3,
            subposition: "edit"
        });
    });
});

//POST
//create new wine in users savedWine arr
router.post("/", (req,res) => {
    if (req.body.buyAgain === "on") {
            req.body.buyAgain = true;
        }else{
            req.body.buyAgain = false;
        }
    User.findByIdAndUpdate(req.session.currentUser._id, {$push: {savedWines:req.body}}, {new:true}, (err, updatedUser) => {
        res.redirect("/wines");
    });
});

//PUT
router.put("/:id", (req,res) => {
    if (req.body.buyAgain === "on") {
            req.body.buyAgain = true;
        }else{
            req.body.buyAgain = false;
        }
    User.findById(req.session.currentUser, (err, foundUser) => {
        foundUser.savedWines.id(req.params.id).remove();
        foundUser.savedWines.push(req.body);
        foundUser.save();
        res.redirect("/wines/");
    });
});

//DELETE
//Remove wine from users saved wine list
router.delete("/:id", (req,res) => {
    User.findById(req.session.currentUser._id, (err,foundUser) => {
        foundUser.savedWines.id(req.params.id).remove();
        foundUser.save();
        res.redirect("/wines");
    });
});

module.exports = router;
