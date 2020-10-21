const express = require('express');
const todo = require('../../models/todo');
const route = express.Router();


//Todos models
const Todo = require('../../models/todo');

//@route Get api/todos
//@desc Get all todos
//@access Public
route.get('/',(req,res)=>{
    Todo.find()
    .sort({date:-1})
    .then(todos => res.json(todos))
})

//@route Post api/todos
//@desc Creat a todos
//@access Public
route.post('/',(req,res)=>{
    console.log(req.body)
    const newTodo = new Todo({
        name: req.body.name,
    })

    newTodo.save().then(todo => res.json(todo))
})



module.exports = route;