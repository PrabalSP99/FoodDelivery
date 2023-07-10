const user_Sch = require('../models/user');

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const jwtsecret = "this_is_Prabal_singh_parihar_studying_in_MNIT_jaipur" 

const { body, validationResult } = require('express-validator');


module.exports.profile = (req,res)=>{
    console.log("running well")
    return res.end('profile page');
}


module.exports.create = async (req,res)=>{
    
      const salt = await bcrypt.genSalt(14);
      let secpassword = await bcrypt.hash(req.body.password,salt)
   
    user_Sch.create({
            name:req.body.name,
            email:req.body.email,
            password:secpassword,
            location:req.body.location
        }
        ).then ((fdapp)=>{
                res.json({success: true})
        }).catch((err)=>{
            console.log("error in fetching")
            res.json({success: false})
        })  
}



module.exports.login= async (req,res)=>{
     
 
   try{
    let email = req.body.email;
    let userData= await user_Sch.findOne({email});
    
        if(!userData){
            return res.status(400).json({error : "enter the correct credentials"});
        }
        
          const pwdcompare= await bcrypt.compare(userData.password,req.body.password)
        if(pwdcompare){
            return res.status(400).json({error : "enter the correct password"});
        }
        else{
            const data={
                user:{
                    id: userData.id
                }
            }
            const authtoken = jwt.sign(data,jwtsecret)
            return res.json({success :true, token: authtoken});

        } 

   }
   catch(error){
    console.log(error)
    res.json({success :false});
   }
    
}