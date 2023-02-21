const {taskService} = require('../services/index');
const { SuccessResponse, ErrorResponse } = require("../utils/response");
const {ClientErrorCodes,ServerErrorCodes,SuccessCodes} = require("../utils/status-code");
const asyncHandler = require('../utils/async-handler');

const createTask = asyncHandler(async(req, res) => {
        const params = { ...req.body, ...req.params, userId: req.user._id }
        const responseData = await taskService.create(params);
        const response = SuccessResponse(responseData, "Successfully created a task");

        return res.OK(response);
});

const get = asyncHandler(async(req, res) => {
        const requestData = { ...req.params, userId: req.user._id, body: req.body };
        const taskRecord = await taskService.get(requestData.id,requestData.userId);
        const response = SuccessResponse(taskRecord, "Successfully fethch task");

        return res.OK(response);
})

const getAll = asyncHandler(async(req, res) => {
        const taskRecord = await taskService.getAll(req.query,{userId: req.user._id});
        const response = SuccessResponse(taskRecord, "Successfully fetch all tasks");

        return res.OK(response);
});

const updateTask = asyncHandler(async(req, res) => {
        const requestData = { ...req.params, userId: req.user._id, body: req.body };
        const taskRecord = await taskService.update(requestData.id,requestData.body,requestData.userId);
        const response = SuccessResponse(taskRecord, "Successfully update task");

        return res.OK(response);
});

const deleteTask = asyncHandler(async(req, res) => {
        const requestData = { ...req.params, userId: req.user._id};
        const responseData = await taskService.destroy(requestData.id,requestData.userId);
        const response = SuccessResponse(responseData, "Successfully delete task");

        return res.OK(response);
})

module.exports = {
    createTask,
    get,
    getAll,
    updateTask,
    deleteTask,
}