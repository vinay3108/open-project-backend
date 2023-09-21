import User from "@models/user.model";
import {IUserService,IUser} from "@interfaces/user.interface";
class UserService implements IUserService {
    
    getAllUsers = async()=>{
        return await User.find({});
    }
    createUser = async(user :IUser)=>{
        return await User.create(user);
    }
}

export default UserService;