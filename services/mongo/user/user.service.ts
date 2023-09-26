import User from "@models/mongo/user.model";
import {IUser} from "@interfaces/user.interface";
import { IService } from "@root/interfaces";
class UserService implements IService {
    
    getAll = async()=>{
        return await User.find({});
    }
    create = async(user :IUser)=>{
        return await User.create(user);
    }
    get = async(id:string)=>{
        return await User.findById(id);
    }
    update =async(id:string, body:any)=>{
        return await User.findByIdAndUpdate(id,body);
    }
    delete= async(id: string)=> {
        return await User.findByIdAndRemove(id);
    }
}

export default UserService;