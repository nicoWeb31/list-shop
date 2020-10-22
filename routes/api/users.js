const express = require('express');
const route = express.Router();

const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const todoController = require('../../controllers/usersController');


const User = require('../../models/User')

//@route Post api/users
//@desc register new users
//@access Public
route.post('/',(req,res)=>{
    //on recupere le body
    const {name,email,password} = req.body;

    //simple validation
    if(!name || !email || !password ){
        res.status(400).json({message: 'Please enter all fiels'})
    }

    //Check for user exist
    User.findOne({email})
    .then(user =>{
        if(user) return res.status(400).json({message: 'User alredy exist'});

        const newUser = new User({name,email,password})

        //encode password
        //create salt
        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err) throw err;
                newUser.password =hash;
                newUser.save()
                .then(user=>{
                    res.json({
                        user : {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    })
                })
            })

        })


    })
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