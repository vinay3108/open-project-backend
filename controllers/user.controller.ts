import { Request,Response } from "express"
import {body, param} from 'express-validator';
import { IUserService } from "@root/interfaces/user.interface";
import { successMessage } from "@root/utils/responseHandler";

class UserController {
    constructor(private userService: IUserService){
    }
    getUsers =async (req:Request,res:Response)=>{
        const users = await this.userService.getUsers();
        return successMessage(res,{
            statusCode:200,
            data:users
        });
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
            const user = await this.userService.createUser({name,email,password,userRole});
            return successMessage(res,{
                statusCode:200,
                data:user
            });
        }catch(err:any){
            res.status(500).json({err:err.message});
        }
    }
    getUser= async(req:Request,res:Response)=>{
        try{
            param('id','Please Enter User id').notEmpty();
            
            const {id} =req.params;
            const user = await this.userService.getUser(id);
            return successMessage(res,{
                statusCode:200,
                data:user
            });
        }catch(err:any){
            res.status(500).json({err:err.message});
        }
    }
    updateUser= async(req:Request,res:Response)=>{
        try{
            param('id','Please Enter User id').notEmpty();
            const {id} =req.params;
            await this.userService.updateUser(id,req.body);
            return successMessage(res,{
                statusCode:200,
                message:"User successfully updated"
            });
        }catch(err:any){
            console.log("here");
            res.status(500).json({err:err.message});
        }
    }
    updateUserRole= async(req:Request,res:Response)=>{
        try{
            param('id','Please Enter User id').notEmpty();
            body('userRole','Please Enter User Role').notEmpty();

            const {id} =req.params;
            const {userRole} =req.body;
            await this.userService.updateUserRole(BigInt(id),Number(userRole));
            return successMessage(res,{
                statusCode:200,
                message:"User successfully updated"
            });
        }catch(err:any){
            console.log("here");
            res.status(500).json({err:err.message});
        }
    }
}


export {
    UserController
};