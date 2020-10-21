const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const todos = require('./routes/api/todo');

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


//use route 
app.use('/api/todos',todos)


const port = process.env.PORT || 5001;

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})