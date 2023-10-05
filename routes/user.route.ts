import express from 'express';
const router  = express.Router();
// import {createUser} from '@controllers/user.controller';
import { UserController } from '@controllers/user.controller';
// import UserService from "@root/services/mongo/user/user.service";
import UserRepository from '@root/repositories/mysql/user.repository';
import { UserService } from '@root/services/mysql/user/user.service';
const userController = new UserController(new UserService(new UserRepository));

router.route('/').post(userController.createUser).get(userController.getUsers);
router.route('/:id').get(userController.getUser).post(userController.updateUser);

export  {router};