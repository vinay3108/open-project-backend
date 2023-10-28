import { IService } from "./index";
import { JsonResponse } from "./utils";
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

export interface IUser extends Required<UserAttributes> {}
export interface IUserRepository extends IService{
    updateRole(id:bigint,roleId:number) :any;
}

export type IUserService ={
    createUser(user:UserAttributes):Promise<JsonResponse>,
    getUsers():Promise<JsonResponse>,
    getUser(id:string):Promise<JsonResponse>,
    updateUser(id:string,user:UserAttributes):Promise<JsonResponse>,
    deleteUser(id:string):Promise<JsonResponse>,
    updateUserRole(id:bigint,role:number):Promise<JsonResponse>,
}