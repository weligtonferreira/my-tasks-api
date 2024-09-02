import { Router } from 'express';

import ListUsersController from '../controllers/user/ListUsersController';
import ListUserController from '../controllers/user/ListUserController';
import CreateUserController from '../controllers/user/CreateUserController';
import DeleteUserController from '../controllers/user/DeleteUserController';
import UpdateUserController from '../controllers/user/UpdateUserController';
import AuthenticateUserController from '../controllers/user/AuthenticateUserController';

const router = Router();

router.post('/login', AuthenticateUserController.handle);
router.get('/', ListUsersController.handle);
router.get('/:id', ListUserController.handle);
router.post('/', CreateUserController.handle);
router.put('/:id', UpdateUserController.handle);
router.delete('/:id', DeleteUserController.handle);

export default router;
