const mongoose = require('mongoose');

const ConfirmAppoinmentPackageSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    wedding:{
        type:String,
        required:true
    },
    design:{
        type:String,
        required:true
    },
    package_type:{
        type:String,
        required:true
    },
    artist:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('confirmappoinmentpackage', ConfirmAppoinmentPackageSchema)