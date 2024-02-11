const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    // },
    status:{
        type:Boolean,
        default:false,
    }
}, {timestamps: true});

const Task = mongoose.model('Task', TaskSchema,'Task');

module.exports = Task;