const express = require('express');
const route = express.Router();
const todoController = require('../../controllers/todoController');
const auth = require('../../middleware/auth')

//second parameter for use middleware who proptect the route with jwt


//@route Get api/todos
//@desc Get all todos
//@access Public
route.get('/',auth,todoController.getAllTodo)

//@route Post api/todos
//@desc Creat a todos
//@access Public
route.post('/',auth,todoController.postTodo)

//@route delete api/todos
//@desc delete a todo
//@access Public
route.delete('/:id',auth,todoController.deleteTodo)



module.exports = route;