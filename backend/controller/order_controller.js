const orderData = require('../models/order');



module.exports.userOrder = async (req, res) => {

    let Data = req.body.fdata  // renderd from FE //
    
     //await Data.splice(0, 0,{ orderdate: req.body.date})  
     const newData= {...Data,date:req.body.date}
     
    let Eid = await orderData.findOne({ 'email': req.body.email })
    console.log(Eid)
    if (Eid == null) {
        try {
            console.log(newData)
              await orderData.create({
                email: req.body.email,
                order_data: req.body.newData 

                
            }).then((userorders) => {
                // console.log(res.json)
                res.status(200).json({ succes: true });

                // res.status(200).json(odata);    
            })
            // console.log(order_data)
        }
        catch (error) {
            res.send("server error", error);
        }
         
    }
    else {
        try {

               await orderData.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: newData } }).then(() => {
                    res.status(200).json({ success: true })
                    // console.log(order_data)

                })
               

        }
        catch (error) {
            res.json({succes:false})
        }
     
    }


}
