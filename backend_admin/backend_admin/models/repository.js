const mongoose = require('mongoose');

const RepoSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:String
    }
})

module.exports = mongoose.model('repository', RepoSchema)