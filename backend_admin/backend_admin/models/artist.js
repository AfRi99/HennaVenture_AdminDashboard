const mongoose = require('mongoose');

const ArtistSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    prework:{
        data:Buffer,
        contentType:String
    },
    certificate:{
        data:Buffer,
        contentType:String
    },
})

module.exports = mongoose.model('artist', ArtistSchema)