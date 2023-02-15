const Todo = require('../models/todo');

const create = async(data) => {
    try {
        const tasks = await Todo.create(data);

        return tasks;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const get = async(taskId) => {
    try {
        const task = await Todo.findById(taskId);

        return task;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getAll = async()=>{
  try {
    const tasks = await Todo.find();

    return tasks;
  } catch (error) {
    console.log(error);

    throw error;
  }
}

const update = async(taskId,data) => {
    try {
        const updatedTask = await Todo.findByIdAndUpdate(taskId,data,{new:true});
        console.log("Task is updated");
        return updatedTask;
    } catch (error) {
        console.log(error.message);
        console.error("There is an error for updating task ");
        throw error;
    }
}

const destroy =async (taskId)=>{
    try {
        const response = await Todo.findByIdAndRemove(taskId);

        return response;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

module.exports = {
    create,
    update,
    getAll,
    get,
    destroy,
}