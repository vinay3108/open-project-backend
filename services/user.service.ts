import { IUser } from "@root/interfaces/user.interface";
import { IUserRepository,IUserService } from "@root/interfaces/user.interface";
class UserService implements IUserService {
    user: IUserRepository;

    constructor(user :IUserRepository){
        this.user = user;
    }
    getUsers = async()=>{
        return await this.user.getAll();
    }
    createUser = async(body :IUser)=>{
        return await this.user.create(body);
    }
    getUser= async(id:string)=>{
        return await this.user.get(id);
    }
    updateUser =async(id:string, body:any)=>{
        return await this.user.update(id,body);
    }
    deleteUser = async(id: string)=> {
        return await this.user.delete(id);
    }
    updateUserRole =async(id:bigint,roleId:number) =>{
        return await this.user.updateRole(id,roleId);
    }
}
export {UserService};