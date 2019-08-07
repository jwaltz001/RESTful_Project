//Session
const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const bcrypt = require('bcrypt');

router.get('/logout', (req, res) => {
    req.session.destroy((err)=> {
        res.redirect('/');
    });
});

router.post("/", (req,res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if (!foundUser){
            res.send("<a href='/'>No User Found</a>");
        }else{
            if(bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser;
                res.redirect("/");
            }else{
                res.send('<a href="/"> password does not match </a>');
            }
        }
    });
});

module.exports = router;

// For auth on homepage?
//     if (req.session.currentUser) {
//         res.render("/",
//         {
//             user: req.session.currentUser
//         });
//     }else{
//         res.render("/users/new");
//     }
// });
