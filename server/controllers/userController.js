const UsersModel = require("../models/User");

module.exports.add = async function (req, res, next) {
    try {
        const user = new UsersModel();

user.firstname = req.body.firstname;
user.lastname = req.body.lastname;
user.email = req.body.email;
user.password = req.body.password; // virtual generates hashed_password

const result = await user.save();

        res.json({
            success: true,
            message: "User added successfully.",
            data: result
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.list = async function (req, res, next) {
    try {
        let result = await UsersModel.find();

        res.json({
            success: true,
            message: "Users list retrieved successfully.",
            data: result
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.read = async function (req, res, next) {
    try {
        let result = await UsersModel.findById(req.params.id);

        res.json({
            success: true,
            message: "User retrieved successfully.",
            data: result
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.update = async function (req, res, next) {
    try {
        let result = await UsersModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            success: true,
            message: "User updated successfully.",
            data: result
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.remove = async function (req, res, next) {
    try {
        await UsersModel.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "User deleted successfully."
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};