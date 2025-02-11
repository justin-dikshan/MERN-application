const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : false
    },
    birthday : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required: true
    },
    department : {
        type: String,
        required : true
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
}); 

module.exports = mongoose.model('User', UserSchema);