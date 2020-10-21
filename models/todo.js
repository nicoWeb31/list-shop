const mongoose =require('mongoose');
const Schema = mongoose.Schema;


const todoShema = new Schema({
    name:{
        type:String,
        required:true,
    },
    date: {
        type:Date,
        default: Date.now
    },
    status:{
        type:Boolean,
        default: false
    }
});


module.exports = todo = mongoose.model('todo',todoShema)