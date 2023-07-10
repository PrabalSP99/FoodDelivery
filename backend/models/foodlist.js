const mongoose = require('mongoose');
var db = require('../config/mongoose');

const foodItem = new mongoose.Schema({
    
    catname:{
        type: String,
        required: true
   },
    fdname:{
         type: String,
         required: true
    },
    fdimg:{
          type: String,
          required: true
    },
    description:{
        type : String,
        required: true
    }

},{timestamps: true});

const Cart = mongoose.model('fooditem',foodItem);
module.exports = Cart;
 
 