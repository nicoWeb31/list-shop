const express = require('express');
const route = express.Router();
const todoController = require('../../controllers/todoController')


//@route Get api/todos
//@desc Get all todos
//@access Public
route.get('/',todoController.getAllTodo)

//@route Post api/todos
//@desc Creat a todos
//@access Public
route.post('/',todoController.postTodo)

//@route delete api/todos
//@desc delete a todo
//@access Public
route.delete('/:id',todoController.deleteTodo)



module.exports = route;