const mongoose = require('mongoose');
var db = require('../config/mongoose');

const cartSch = new mongoose.Schema({
    
    cat_name:{
         type: String,
         required: true
    }

},{timestamps: true});

const Cart = mongoose.model('food_carts',cartSch);
module.exports = Cart;
 
 
 
 //{
//     fetchData:function(callback){
//         Cart.find({}).toArray((err,data)=>{
//             if(err){console.log(err)}
//             else{
//                 global.fooditem=data;
//                 console.log(global.fooditem);
//             }
//         })
//         //console.log(userData)
//         // userData.exec(function(err, data){
//         //     if(err) throw err;
//         //     return callback(data);
//         // })
        
//      }
// }