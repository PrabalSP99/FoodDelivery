const anotherdata =require('../models/order')

module.exports.usrOdrData = async(req,res)=>{
    const email = req.query.email;
    // console.log(email)//
    try{
        let userData = await anotherdata.findOne({email});
        res.status(200).json(userData);    
    }
    catch(error){
        res.send("server error", error.message);
    }
    
}