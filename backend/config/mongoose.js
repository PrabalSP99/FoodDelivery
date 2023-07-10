const mongoose = require('mongoose');
const mongourl = 'mongodb+srv://PrabalSingh:Ho4YX0LZG2uON82t@mydatabase.kkl1axg.mongodb.net/?retryWrites=true&w=majority';


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongourl,{useNewUrlParser:true}).then(async(result)=>{
    console.log('connected successfully');
    })
    
}

// const mongoDb = async()=>{
//   await mongoose.connect(db,{useNewUrlParser: true}, async(err,data)=>{
//      if(err){console.log(err, "error in connection")}
//      else{
//       console.log('connected successfully');
//      }
//   })
// }

// module.exports=mongoDb;