const UsersModel = require('../models/User.js');
let jwt = require('jsonwebtoken');
let { expressjwt } = require('express-jwt');

let secretkey = process.env.JWT_SECRET;

const UsersModel = require('../models/User.js');
let jwt = require('jsonwebtoken');
let { expressjwt } = require('express-jwt');

let secretkey = process.env.JWT_SECRET;

exports.signin = async (req, res) => {

    const user = await UsersModel.findOne({
        email: req.body.email
    });

    if (!user)
        return res.json({
            success:false,
            message:"User not found"
        });

    if(!user.authenticate(req.body.password))
        return res.json({
            success:false,
            message:"Incorrect password"
        });

    const token = jwt.sign(
        { id:user._id },
        process.env.JWT_SECRET,
        { expiresIn:"1d" }
    );

    res.json({
        success:true,
        token,
        user:{
            id:user._id,
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email
        }
    });

};

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
