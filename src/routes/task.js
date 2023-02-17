const express = require('express');

const {taskControllers} = require('../controller/index');
const {checkValidUser} = require('../middleware/auth');
const router = express.Router();

router.post('/create',checkValidUser,taskControllers.createTask);
router.get('/:id',checkValidUser,taskControllers.get);
router.get('/',checkValidUser,taskControllers.getAll);
router.patch('/:id',checkValidUser,taskControllers.updateTask);
router.delete('/:id',checkValidUser,taskControllers.deleteTask);


module.exports = router;