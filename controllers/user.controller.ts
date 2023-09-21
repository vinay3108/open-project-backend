import { Request,Response } from "express"
import {body} from 'express-validator';
import User from "@models/user.model";
import { IUserService } from "@root/interfaces/user.interface";
class UserController {
    constructor(private userService: IUserService){
    }
    getUsers =async (req:Request,res:Response)=>{
        const users = await this.userService.getAllUsers();
        res.send(users);
    }
    createUser= async(req:Request,res:Response)=>{
        try{
            body('name','Please Enter Name').notEmpty();
            body('email','Please Enter Valid Email').isEmail().notEmpty();
            body('password','Please Enter PassWord').isLength({
                min: 4,
                max: 8,
            }).notEmpty();
            
            const {name,email,password} =req.body;
            const user = await this.userService.createUser({name,email,password});
            res.status(200).json({
                name:user.name,
                email:user.email
            });
        }catch(err:any){
            res.status(500).json({err:err.message});
        }

    }
}


export {
    UserController
};