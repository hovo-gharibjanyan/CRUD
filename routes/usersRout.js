// routers //
import express from 'express';
import {UserController} from '../controller/UserController.js';
const usersRouter = express.Router();
const userController = new UserController();
usersRouter
    .route('/users')
    .post(userController.userValidate,userController.createUser)
    .get(userController.getUsers);

usersRouter
    .route('/users/:userId')
    .get(userController.getUserById)
    .put(userController.userValidate,userController.updateUser)
    .delete(userController.deleteUser);

export {usersRouter}