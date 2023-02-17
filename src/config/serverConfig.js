const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const connect = async () => {
    await mongoose.connect('mongodb://localhost/todoApp_db');
}

module.exports = {
    connect:connect,
    PORT: process.env.PORT,
    JWT_KEY:process.env.JWT_KEY,
};