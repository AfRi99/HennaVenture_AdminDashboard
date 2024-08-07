const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    count:{
        type:String,
        required:true
    },
    image1:{
        data:Buffer,
        contentType:String
    },
    image2:{
        data:Buffer,
        contentType:String
    },
    image3:{
        data:Buffer,
        contentType:String
    }
})

module.exports = mongoose.model('product', ProductSchema)