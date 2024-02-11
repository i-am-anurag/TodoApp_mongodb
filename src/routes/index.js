const express = require('express');
const response = require('../middleware/response');
const userRoutes = require('./user');
const taskRoutes = require('./task');

const router = express.Router();

router.use('/',response,userRoutes);
router.use('/user/task',response,taskRoutes);

module.exports = router;