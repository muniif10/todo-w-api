import express from 'express'
import * as taskController from '../src/controllers/taskController'

const router = express.Router();

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTask);
router.put('/tasks',taskController.updateTask);
router.delete('/tasks/:id',taskController.deleteTask);

export default router;