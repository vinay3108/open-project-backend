import { IUser } from "@root/interfaces/user.interface";
import { IUserService } from "@root/interfaces/user.interface";
class UserService  {
    user: IUserService;

    constructor(user :IUserService){
        this.user = user;
    }
    getAll = async()=>{
        return await this.user.getAll();
    }
    create = async(body :IUser)=>{
        return await this.user.create(body);
    }
    get = async(id:string)=>{
        return await this.user.get(id);
    }
    update =async(id:string, body:any)=>{
        return await this.user.update(id,body);
    }
    delete = async(id: string)=> {
        return await this.user.delete(id);
    }
    updateRole =async(id:bigint,roleId:number) =>{
        return await this.user.updateRole(id,roleId);
    }
}
export {UserService};