const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Email: {type : String , unique : false},
    Lastname : String,
    Firstname: String,
    Age: String
}, {timestamps: true})




module.exports = mongoose.model('users', UserSchema)