import { Router } from 'express';

import { verifyJwtToken } from '../middlewares/verifyJwtToken';

import ListUsersController from '../controllers/user/ListUsersController';
import ListUserController from '../controllers/user/ListUserController';
import CreateUserController from '../controllers/user/CreateUserController';
import DeleteUserController from '../controllers/user/DeleteUserController';
import UpdateUserController from '../controllers/user/UpdateUserController';
import AuthenticateUserController from '../controllers/user/AuthenticateUserController';

const router = Router();

router.post('/login', AuthenticateUserController.handle);
router.get('/', verifyJwtToken, ListUsersController.handle);
router.get('/:id', verifyJwtToken, ListUserController.handle);
router.post('/', CreateUserController.handle);
router.put('/:id', verifyJwtToken, UpdateUserController.handle);
router.delete('/:id', verifyJwtToken, DeleteUserController.handle);

export default router;
