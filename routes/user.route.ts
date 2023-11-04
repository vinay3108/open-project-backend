import express from 'express';
const router  = express.Router();
import { UserController } from '@controllers/user.controller';
import UserMongoRepository from '@root/repositories/mongo/user.repository';
import UserSqlRepository from '@root/repositories/mysql/user.repository';
import { UserService } from '@root/services/user.service';
const userController = new UserController(new UserService(new UserSqlRepository));

router.route('/').post(userController.createUser).get(userController.getUsers);
router.route('/:id').get(userController.getUser).put(userController.updateUser);
router.route('/role/:id').put(userController.updateUserRole)

export  {router};