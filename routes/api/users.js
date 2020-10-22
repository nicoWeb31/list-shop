const express = require('express');
const route = express.Router();
const todoController = require('../../controllers/usersController')

const User = require('../../models/User')

//@route Post api/users
//@desc register new users
//@access Public
route.post('/',(req,res)=>{
    res.send('register')
})

// //@route Post api/todos
// //@desc Creat a todos
// //@access Public
// route.post('/',todoController.postTodo)

// //@route delete api/todos
// //@desc delete a todo
// //@access Public
// route.delete('/:id',todoController.deleteTodo)



module.exports = route;