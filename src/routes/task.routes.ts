import { Router } from 'express';

import CreateTaskController from '../controllers/task/CreateTaskController';
import ListTasksController from '../controllers/task/ListTasksController';
import ListTaskController from '../controllers/task/ListTaskController';
import UpdateTaskController from '../controllers/task/UpdateTaskController';
import DeleteTaskController from '../controllers/task/DeleteTaskController';
import ChangeTaskStatusController from '../controllers/task/ChangeTaskStatusController';

const router = Router();

router.post('/:userId', CreateTaskController.handle);
router.get('/', ListTasksController.handle);
router.get('/:id', ListTaskController.handle);
router.put('/:id', UpdateTaskController.handle);
router.delete('/:id', DeleteTaskController.handle);
router.patch('/:id', ChangeTaskStatusController.handle);

export default router;
