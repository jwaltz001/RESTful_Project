//console.log(process.env.MONGODB_URI);

//___________________
//Dependencies
//___________________
//npm modules
const express = require('express');
const app = express ();
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const session = require("express-session");

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
//Global Configuration
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;
const db = mongoose.connection;
// Fix Depreciation Warnings from Mongoose*
// May or may not need these depending on your Mongoose version
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  {useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

//sessions
app.use(session({
    secret:"secret",
    //secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
//___________________
// Routes
//___________________
//HOMEPAGE
const navInfo = (id) => {
    return [
        {title:"Home", url:"/"},
        "Wine Journal","/wines",
        {title:"Entry", url:"/wines/"+id},
        {title:"Edit", url:"/wines/"+id+"/edit"},
        {title:"New", url:"/wines/new"}
    ];
};
app.get("/", (req,res) => {
    res.render("home.ejs",
    {
        user: req.session.currentUser,
        tabTitle: navInfo(),
        siteMapPostion: 0
    });
});
//Controllers
const winesController = require("./controllers/wineSessions.js");
app.use("/wines", winesController);

const userController = require("./controllers/users.js");
app.use("/users", userController);

const sessionController = require("./controllers/sessions.js");
app.use("/sessions", sessionController);
//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
