import { IService } from '@root/interfaces'
import {Op} from 'sequelize'
import { UserInput,UserOutput } from '@root/models/sql/user.model'
import User from '@root/models/sql/user.model';

class UserRepository implements IService{

    create = async (payload: UserInput): Promise<UserOutput> => {
    const user = await User.create(payload)
    return user;
    }
    getAll =async()=>{
        const user=await User.findAll({});
        return user;
    }
    get=(id:string)=>{

    }
    update=(id:string,body:any)=>{

    }
    delete = (id:string)=>{ 

    }


}
export default UserRepository;