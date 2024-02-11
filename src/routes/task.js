const express = require('express');

const {taskControllers} = require('../controller/index');
const {checkValidUser} = require('../middleware/auth');
const router = express.Router();

router.post('/create',taskControllers.createTask);
router.get('/:id',taskControllers.get);
router.get('/',taskControllers.getAll);
router.patch('/:id',taskControllers.updateTask);
router.delete('/:id',taskControllers.deleteTask);


module.exports = router;