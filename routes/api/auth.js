const express = require('express');
const route = express.Router();

const authController = require('../../controllers/authController');



//@route Post api/auth
//@desc authenticade user
//@access Public
route.post('/', authController.authUser)





module.exports = route;