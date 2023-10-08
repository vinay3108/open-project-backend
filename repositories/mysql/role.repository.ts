import { IService } from "@root/interfaces";
import Role from "@root/models/sql/role.model";
import BaseSqlRepository from "./base.repository";
class RoleSqlRepository extends BaseSqlRepository implements IService{
    constructor(){
        super(Role);
    }
}
export default RoleSqlRepository;