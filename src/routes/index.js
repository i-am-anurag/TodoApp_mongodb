const express = require('express');

const userRoutes = require('./user');
const taskRoutes = require('./task');
const router = express.Router();

router.use('/',userRoutes);
router.use('/user/task',taskRoutes);

module.exports = router