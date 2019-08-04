const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineSchema = new Schema ({
    name: {type:String, require:true},
    brand: String,
    origin: String,
    year: Number,
    price: Number,
    boughtAt: String,
    rating: Number,
    type: String,
    color: String,
    flavor: String,
    aroma: String,
    finish: String,
    comments: String,
    buyAgain: Boolean,
    numberBought: Number
},{timestamps: true});

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;
