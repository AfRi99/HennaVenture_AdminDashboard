const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    rate:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    artist:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('rating', ReviewSchema)