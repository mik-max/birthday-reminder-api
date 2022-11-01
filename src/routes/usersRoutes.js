import { createUser, getUsers, getUserById, updateUser, deleteUser, signInUser } from '../controllers/usersController.js';
import { Router } from 'express';
let usersRouter = Router();

usersRouter.post('/create/users', createUser);
usersRouter.get('/users', getUsers)
usersRouter.get('/users/:id', getUserById)
usersRouter.put('/update/users/:id', updateUser)
usersRouter.delete('/delete/users/:id', deleteUser)
usersRouter.post('/user/signin', signInUser)

export default usersRouter;