import express from 'express';
const router  = express.Router();
// import {createUser} from '@controllers/user.controller';
import { UserController } from '@controllers/user.controller';
import UserService from "@services/user.service";
const userController = new UserController(new UserService());

router.route('/').post(userController.createUser).get(userController.getUsers);

export default router;