const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Wine = mongoose.model("Wine", wineSchema);
//Role = require('./role.js'),
const WineSchema = mongoose.model('Wine').schema;


const userSchema = Schema({
    username: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    name: String,
    savedWines: [WineSchema]
    },{timestamps:true});

const User = mongoose.model("User", userSchema);

module.exports = User;
