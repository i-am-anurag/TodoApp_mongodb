const {taskService} = require('../services/index');

const { SuccessResponse, ErrorResponse } = require("../utils/response");
const {ClientErrorCodes,ServerErrorCodes,SuccessCodes} = require("../utils/status-code");

const createTask = async(req, res) => {
    try {
        const params = { ...req.body, ...req.params, userId: req.user._id }
        const response = await taskService.create(params);

        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully creat a task";

        return res.status(SuccessCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Not able to create task";
        ErrorResponse.error = error.message;
        let statusCode = error.statusCode || ServerErrorCodes.INTERNAL_SERVER_ERROR;

        if (error.name = "Validationerror")
            statusCode = ClientErrorCodes.BAD_REQUESET;

        return res.status(statusCode).json(ErrorResponse);
    }
}

const get = async(req, res) => {
    try {
        const requestData = { ...req.params, userId: req.user._id, body: req.body };
        const taskRecord = await taskService.get(requestData.id,requestData.userId);

        SuccessResponse.data = taskRecord;
        SuccessResponse.message = "Successfully fetch a task";

        return res.status(SuccessCodes.OK).json(SuccessResponse);
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get task',
            err: error.message
        });
    }
}

const getAll = async(req, res) => {
    try {
        const Taskdata = await taskService.getAll(req.query,{userId: req.user._id});

        return res.status(200).json({
            data: Taskdata,
            success: true,
            err: {},
            message: 'Successfully fetched the task'
        });
    } catch (error) {
        ErrorResponse.message = "Not able to get task";
        ErrorResponse.error = error.message;
        let statusCode = error.statusCode || ServerErrorCodes.INTERNAL_SERVER_ERROR;

        if (error.name = "Validationerror")
            statusCode = ClientErrorCodes.BAD_REQUESET;

        return res.status(statusCode).json(ErrorResponse);
    }
}

const updateTask = async(req, res) => {
    try {
        const requestData = { ...req.params, userId: req.user._id, body: req.body };
        const taskRecord = await taskService.update(requestData.id,requestData.body,requestData.userId);

        SuccessResponse.data = taskRecord;
        SuccessResponse.message = "Successfully update a task";

        return res.status(SuccessCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Not able to update task";
        ErrorResponse.error = error.message;
        let statusCode = error.statusCode || ServerErrorCodes.INTERNAL_SERVER_ERROR;

        if (error.name = "Validationerror")
            statusCode = ClientErrorCodes.BAD_REQUESET;

        return res.status(statusCode).json(ErrorResponse);
    }
}

const deleteTask = async(req, res) => {
    try {
        const requestData = { ...req.params, userId: req.user._id};
        const response = await taskService.destroy(requestData.id,requestData.userId);
        console.log(response);

        SuccessResponse.data = {};
        SuccessResponse.message = "Task deleted successfully";

        return res.status(SuccessCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Not able to delete task";
        ErrorResponse.error = error.message;
        let statusCode = error.statusCode || ServerErrorCodes.INTERNAL_SERVER_ERROR;

        if (error.name = "Validationerror")
            statusCode = ClientErrorCodes.BAD_REQUESET;

        return res.status(statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createTask,
    get,
    getAll,
    updateTask,
    deleteTask,
}