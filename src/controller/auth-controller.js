const  UserService = require("../services/user-service.js");

const signup = async (req, res) => {
    try {
        const response = await UserService.signup({
            email: req.body.email,
            password: req.body.password,
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch(err) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: err.message
        });
    }
}

const login = async (req, res) => {
    try {
        const token = await UserService.signin(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: token,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error.message,
        });
    }
}

module.exports = {
    signup,
    login,   
}