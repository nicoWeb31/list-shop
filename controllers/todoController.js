//Todos models
const Todo = require('../models/todo');


//----------------
exports.getAllTodo = (req,res)=>{
    Todo.find()
    .sort({date:-1})
    .then(todos => res.json(todos))
}

//----------------
exports.postTodo = (req,res)=>{
    console.log(req.body)
    const newTodo = new Todo({
        name: req.body.name,
    })

    newTodo.save().then(todo => res.json(todo))
}

//----------------
exports.deleteTodo = (req,res)=>{
    Todo.findById(req.params.id)
    .then(todo => todo.remove().then(()=> res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}))
}