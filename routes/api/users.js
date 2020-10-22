const express = require('express');
const route = express.Router();


const userController = require('../../controllers/usersController');



//@route Post api/users
//@desc register new users
//@access Public
route.post('/',userController.registerUser)




module.exports = route;