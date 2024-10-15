import { Router } from 'express';

import { verifyJwtToken } from '../middlewares/verifyJwtToken';

import CreateTaskController from '../controllers/task/CreateTaskController';
import ListTasksController from '../controllers/task/ListTasksController';
import ListTaskController from '../controllers/task/ListTaskController';
import UpdateTaskController from '../controllers/task/UpdateTaskController';
import DeleteTaskController from '../controllers/task/DeleteTaskController';
import ChangeTaskStatusController from '../controllers/task/ChangeTaskStatusController';

const router = Router();

router.post('/:userId', verifyJwtToken, CreateTaskController.handle);
router.get('/', verifyJwtToken, ListTasksController.handle);
router.get('/:id', verifyJwtToken, ListTaskController.handle);
router.put('/:id', verifyJwtToken, UpdateTaskController.handle);
router.delete('/:id', verifyJwtToken, DeleteTaskController.handle);
router.patch('/:id', verifyJwtToken, ChangeTaskStatusController.handle);

export default router;
