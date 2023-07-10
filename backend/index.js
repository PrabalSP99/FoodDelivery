const express =require('express');
const path = require(('path'))
var bodyParser = require('body-parser');
const app= express();
// const port =5000;
const port = process.env.PORT


// make a connection to the front end//
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With, Content-Type, Accept'
  );
  next();
})

app.use(bodyParser.json());
app.use('/', require('./routes/index'));

// static file //
app.use(express.static(path.join(__dirname,"./frontend/build")))
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'./frontend/build/index.html'))
})

app.listen(port,(err)=>{
    if(err){
        console.log(`error: ${err}`);
        return;
    }
    console.log(`server running on port : ${port}`)
})