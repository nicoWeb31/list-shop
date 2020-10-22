const express = require('express');
const route = express.Router();
const auth = require('../../middleware/auth')

const authController = require('../../controllers/authController');



//@route Post api/auth
//@desc authenticade user
//@access Public
route.post('/', authController.authUser)

//@route get api/auth/user
//@desc get user data
//@access Private
route.get('/user',auth,authController.getUserData)



module.exports = route;