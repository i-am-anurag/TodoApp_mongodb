const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, {timestamps: true});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;