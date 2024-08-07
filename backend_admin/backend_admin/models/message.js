const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('message', MessageSchema)