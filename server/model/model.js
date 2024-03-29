const mongoose = require ('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    uploader:{
        type:String,
        required:true,
        unique: true
    },
    description:{
        type:String,
        required:true,
        unique: true
    },
    address:{
        type:String,
        required:true,
        unique: true
    },
})

const Userdb = mongoose.model('userdb', schema );

module.exports = Userdb;