const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    orderid:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    custom:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('order', OrderSchema)