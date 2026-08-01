const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.signin = async (req, res) => {

    const user = await User.findOne({
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