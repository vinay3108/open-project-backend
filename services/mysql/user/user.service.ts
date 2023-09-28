import { sequelize } from "@root/initials/database";
import { DataTypes } from "sequelize";
import {User as sqlUserService } from "@models/sql/user.model";
import { IService } from "@root/interfaces";
import { IUser } from "@root/interfaces/user.interface";
const user = sqlUserService(sequelize,DataTypes);
class UserService implements IService {
    
    getAll = async()=>{
        return await user.findAll({});
    }
    create = async(body :IUser)=>{
        return await user.create(body);
    }
    get = async(id:string)=>{
        return await user.findByPk(id);
    }
    update =async(id:string, body:any)=>{
        return await user.update(body, {
            where: {
                id: Number(id)
            }
        });
    }
    delete= async(id: string)=> {
        return await user.destroy({
            where: {
                id: Number(id)
            }
        });
    }
}
export {UserService};