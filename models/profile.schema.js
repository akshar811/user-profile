const mongoose = require('mongoose');

let userprofile = new mongoose.Schema({
    image : String,
    passion : String,
    name : String,
    age : Number,
    mobile : Number,
    email : String,
    address : String,
})

let profile = mongoose.model("profile",userprofile);

module.exports = profile