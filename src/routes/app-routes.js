const express = require('express');

const taskContoller = require('../controller/task-controller');
const router = express.Router();

router.post('/create',taskContoller.createTask);
router.get('/task/:id',taskContoller.get);
router.get('/task',taskContoller.getAll);
router.patch('/task/:id',taskContoller.updateTask);
router.delete('/task/:id',taskContoller.deleteTask);

module.exports = router;