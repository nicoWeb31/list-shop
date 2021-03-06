const config = require('config');
const jwt = require('jsonwebtoken');

//middleware for jwt
const auth = (req, res, next) => {

    //token from header
    const token = req.header('x-auth-token');
    
    //check from token
    if (!token) {
        return res.status(401).json({ message: "token empty or invalid !" })
    }


    
    try {
    
        //vefify token
        //on decode :
        const decoded = jwt.verify(token, config.get('jwtSecret'))

        //ADD user from payload
        req.user = decoded;

        next();

    } catch (err) {

        res.status(400).json({message:"Token is not valid"})

    }


}

module.exports = auth; 


