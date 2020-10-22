const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../models/User')

exports.authUser = (req, res) => {
    //on recupere le body
    const { email, password } = req.body;

    //simple validation
    if (!email || !password) {
        res.status(400).json({ message: 'Please enter all fiels' })
    }

    //Check for user exist
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ message: 'User does not exist' });
            //compare the plain text password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ message: "password doesn't match !" });
                    //jwt
                    jwt.sign(
                        //payload
                        { id: user.id, toto: "toto" },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                }
                            })
                        }
                    )
                })
        })
}