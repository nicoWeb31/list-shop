const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

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


//serve static if in production
if(process.env.NODE_ENV === 'production'){

    //set Static folder
    app.use(express.static('client/build'))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}

const port = process.env.PORT || 5001;

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})