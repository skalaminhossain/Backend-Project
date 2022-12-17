const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        trim : true,
        required : true,
        unique : true
    },
    body : {
        type : String,
        required : true
    },
    username : {
        type : String,
        trim : true,
        default : "admin"
    },
    category : {
        type : Array,
        required : true
    },
    photo : {
        type : String,
        required : true
    }

},{timeseries : true})


const postModel = mongoose.model('Post' , postSchema)
module.exports = postModel