import { IService } from "@root/interfaces";
import { IUser } from "@root/interfaces/user.interface";
import User from "@root/models/mongo/user.model";
class UserMongoRepository implements IService{

    create = async (payload: IUser): Promise<IUser> => {
        const user = await User.create(payload)
        return user;
        }
        getAll =async()=>{
            const user=await User.find({});
            return user;
        }
        get=(id:string)=>{
    
        }
        update=(id:string,body:any)=>{
    
        }
        delete = (id:string)=>{ 
    
        }
}

export default UserMongoRepository;