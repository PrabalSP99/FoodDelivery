const mongoose = require('mongoose');

const userSch = new mongoose.Schema({
    name:{
         type: String,
         required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
   },

   password :{
    type: String,
    required: true
   },

   location:{
    type: String,
    required: true
},
 date:{
    type: Date,
    default :Date.now
 }
},{timestamps: true});

const User = mongoose.model('fdapp',userSch);
module.exports = User;