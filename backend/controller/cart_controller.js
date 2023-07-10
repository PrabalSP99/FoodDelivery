const cart = require('../models/foodlist')
const category =require('../models/cart')
module.exports.data= async(req,res)=>{   
     const data = await cart.find()
     const fdcat= await category.find()
     res.status(200).json([data,fdcat]);
}

