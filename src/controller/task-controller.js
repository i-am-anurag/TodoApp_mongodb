const taskService = require('../services/todo-service');

const createTask = async(req, res) => {
    try {
        const response = await taskService.create({
            content:req.body.content
        });

        return res.status(200).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully created a task'
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            err: {},
            message: error.message
        })
    }
}

// const getAllTasks = (req, res) => {
//     try {
        
//     } catch (error) {
        
//     }
// }

const get = async(req, res) => {
    try {
        const response = await taskService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the task'
        });
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
        const Taskdata = await taskService.getAll(req.query);

        return res.status(200).json({
            data: Taskdata,
            success: true,
            err: {},
            message: 'Successfully fetched the task'
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get task',
            err: error.message
        });
    }
}

const updateTask = async(req, res) => {
    try {
        const response = await taskService.update(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully updated the task'
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            err: {},
            message: error.message,
        });
    }
}

const deleteTask = async(req, res) => {
    try {
        await taskService.destroy(req.params.id);
        
        return res.status(200).json({
            data: {},
            success: true,
            err: {},
            message: 'Task deleted successfully',
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            err: {},
            message: error.message,
        });
    }
}

module.exports = {
    createTask,
    get,
    getAll,
    updateTask,
    deleteTask,
}