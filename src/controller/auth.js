const {userService} = require('../services/index');

const { SuccessResponse, ErrorResponse } = require("../utils/response");
const {ClientErrorCodes,ServerErrorCodes,SuccessCodes} = require("../utils/status-code");

const signup = async (req, res) => {
    try {
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
        });

        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully created a new user";
        return res.status(SuccessCodes.CREATED).json(SuccessResponse);
    } catch(err) {
        console.log("there is an error to creating a new account");

        ErrorResponse.message = "Not able to create account";
        ErrorResponse.error = err.message;
        let statusCode = err.statusCode || ServerErrorCodes.INTERNAL_SERVER_ERROR;
        if (err.name = "Validationerror")
            statusCode = ClientErrorCodes.BAD_REQUESET;
        return res.status(statusCode).json(ErrorResponse);
    }
}

const login = async (req, res) => {
    try {
        const {email,password} = req.body;
        const token = await userService.signin({email,password});
        
        SuccessResponse.data = token;
        SuccessResponse.message = "User logged in successfully";

        return res.status(SuccessCodes.OK).json(SuccessResponse);
    } catch(error) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = error.message;
        let statusCode = error.statusCode || ServerErrorCodes.INTERNAL_SERVER_ERROR;
        if (err.name = "Validationerror")
            statusCode = ClientErrorCodes.BAD_REQUESET;
            
        return res.status(statusCode).json(ErrorResponse);
    }
}

module.exports = {
    signup,
    login,   
}