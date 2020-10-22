const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../models/User')

exports.registerUser = (req, res) => {
    //on recupere le body
    const { name, email, password } = req.body;

    //simple validation
    if (!name || !email || !password) {
        res.status(400).json({ message: 'Please enter all fiels' })
    }

    //Check for user exist
    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ message: 'User alredy exist' });

            const newUser = new User({ name, email, password })

            //encode password
            //create salt
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

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

            })


        })
}