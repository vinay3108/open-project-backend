import { Request,Response } from "express"
import {body, param} from 'express-validator';
import { IService } from "@root/interfaces";
import RoleAttributes from "@root/interfaces/role.interface";

class RoleController {
    constructor(private roleService: IService){
    }
    createRole = async(req:Request ,res:Response)=>{
        body('roleName',"Please Provide a Valid Role Name");
        body('departmentId',"Please Provide a Valid Department Id");
        const {roleName,departmentId}:RoleAttributes =req.body();
        const role = await this.roleService.create({roleName,departmentId});
        return res.status(200).json({role});
    }
    getAllRoles = async(req:Request ,res:Response)=>{
        return await this.roleService.getAll();
    }
    // getRole = async(req:Request ,res:Response)=>{
    //     return await this.roleService.get();
    // }
    // updateRole = async(req:Request ,res:Response)=>{
    //     return await this.roleService.update();
    // }
    // deleteRole = async(req:Request ,res:Response)=>{
    //     return await this.roleService.delete();
    // }
}