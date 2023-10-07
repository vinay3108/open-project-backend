import { Request,Response } from "express"
import {body, param} from 'express-validator';
import { IService } from "@root/interfaces";


class UserController {
    constructor(private userService: IService){
    }
    getUsers =async (req:Request,res:Response)=>{
        const users = await this.userService.getAll();
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

            const {name,email,password,userRole} =req.body;
            const user = await this.userService.create({name,email,password,userRole});
            res.status(200).json({
                name:user.name,
                email:user.email
            });
        }catch(err:any){
            res.status(500).json({err:err.message});
        }
    }
    getUser= async(req:Request,res:Response)=>{
        try{
            param('id','Please Enter User id').notEmpty();
            
            const {id} =req.params;
            const user = await this.userService.get(id);
            res.status(200).json({
                name:user.name,
                email:user.email
            });
        }catch(err:any){
            res.status(500).json({err:err.message});
        }
    }
    updateUser= async(req:Request,res:Response)=>{
        try{
            param('id','Please Enter User id').notEmpty();
            const {id} =req.params;
            await this.userService.update(id,req.body);
            res.send("User successfully updated");
        }catch(err:any){
            console.log("here");
            res.status(500).json({err:err.message});
        }
    }
}


export {
    UserController
};