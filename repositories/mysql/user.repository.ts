import User from '@root/models/sql/user.model';
import BaseSqlRepository from './base.repository';
import { IUserService } from '@root/interfaces/user.interface';

class UserSqlRepository extends BaseSqlRepository implements IUserService{
    constructor(){
        super(User);
    }
    updateRole = async (id:any,roleId:number) =>{
        const user = await User.findByPk(id);
        if(!user){
            return false;
        }
        await user.update({userRole:roleId});
        await user.save();
    }
}
export default UserSqlRepository;