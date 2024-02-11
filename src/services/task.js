const Task = require('../models/task');
const {ErrorResponse} = require('../utils/response');
const {ClientErrorCodes} = require('../utils/status-code');

const create = async(data) => {
        const taskRecords = await Task.create(data);
        
        return taskRecords;
}

const get = async(taskId,userId) => {
        const taskRecords = await Task.findById({_id:taskId,userId});
        if (!taskRecords) {
            throw new ErrorResponse(
            "No task exist for corrosponding user",
            ClientErrorCodes.BAD_REQUESET);
        }

    return taskRecords;
}

const getAll = async(data,{userId})=>{
    console.log(userId);
    const taskRecords = await Task.find({userId});

    return taskRecords;
}

const getTask = async(filer)=>{
    try {
        const data = await Task.find(filer);

        return data;
    } catch (error) {
        console.log("Something went wrong to fetch data");
    }
}

const update = async(taskId,data,userId) => {
        const updatedTask = await Task.findByIdAndUpdate({_id:taskId,userId},data,{new:true});
        if (!updatedTask) {
            throw new ErrorResponse(
            "No task exist for corrosponding user",
            ClientErrorCodes.BAD_REQUESET);
        }

        return updatedTask;
}

const destroy = async(taskId,userId)=>{
        const response = await Task.findByIdAndRemove({_id:taskId,userId});
        if (!response) {
            throw new ErrorResponse(
            "No task exist for corrosponding user",
            ClientErrorCodes.BAD_REQUESET);
        }

        return response;
}

module.exports = {
    create,
    update,
    getAll,
    get,
    destroy,
    getTask,
}