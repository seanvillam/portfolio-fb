const UsersModel = require('../models/User.js');
let jwt = require('jsonwebtoken');
let { expressjwt } = require('express-jwt');

let secretkey = process.env.JWT_SECRET;

module.exports.signin = async function (req, res, next) {
    try {
        console.log(req.body);
        let user = await UsersModel.findOne({ "email": req.body.email });

        console.log(user);
        console.log(user?.constructor?.name);   
        console.log(typeof user.authenticate);

        if (!user) {
    return res.status(401).json({
        success: false,
        message: "User not found."
    });
}

if (!user.authenticate(req.body.password)) {
    return res.status(401).json({
        success: false,
        message: "Incorrect password."
    });
}

        let payload = {
            id: user._id
        }

        let token = jwt.sign(payload, secretkey, {
            algorithm: 'HS512',
            expiresIn: "20min"
        });

        res.json(
            {
                success: true,
                message: "User authenticated successfully.",
                token: token
            })

    } catch (error) {
        console.log(error);
        next(error);

    }
}

module.exports.signup = async function (req, res, next) {
    try {

        const user = new UsersModel();

        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.email = req.body.email;
        user.password = req.body.password;

        const result = await user.save();

        res.json({
            success: true,
            message: "User registered successfully.",
            data: result
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};
