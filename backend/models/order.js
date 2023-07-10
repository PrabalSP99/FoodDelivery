const mongoose= require('mongoose');

const orderSchema = new mongoose.Schema({
    
    email:{
         type: String,
         required: true,
         unique:true
    },
    order_data:{
          type: Array,
          required: true
    }


},{timestamps: true});

const order = mongoose.model('Usersorder',orderSchema);
module.exports = order;
