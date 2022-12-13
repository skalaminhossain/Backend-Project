const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true
    },
    username : {
        type : String,
        trim : true,
        required : true,
        unique : true
    },
    email : {
        type : String,
        trim : true,
        required : true,
        unique : true
    },
    password : {
        type : String,
        trim : true,
        required : true
    },
    profile : {
        type : String,
        default : "avater.png"
    }
}, {timestamps : true})

const userModel = mongoose.model('User' , userSchema)

module.exports = userModel