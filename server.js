const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

//body-parser
app.use(bodyParser.json());


//bd Config
const db = require('./config/keys').mongoURI;
//db connect mongo
mongoose.connect(db,{ useUnifiedTopology: true,useNewUrlParser: true })
.then(()=>{
    console.log('mongo db connected ! .....')
}).catch(err=>{
    console.log(err)
})


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})