const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ConfirmArtistSchema = mongoose.Schema({
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
    is_approved:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },

})

ConfirmArtistSchema.pre('save', async function(next) {
    const user = this;
    if(!user.isModified('password')) return next();
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
});

module.exports = mongoose.model('confirmartist', ConfirmArtistSchema)