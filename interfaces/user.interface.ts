import { IService } from "./index";

export interface UserAttributes {
    id?:bigint;
    name:String;
    email:String;
    password:String;
    userRole:number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

interface IUser extends Required<UserAttributes> {}
export interface IUserService extends IService{
    updateRole(id:bigint,roleId:number) :any;
}

export {
    IUser,
};