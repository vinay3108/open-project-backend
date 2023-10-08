import { IService } from "@root/interfaces";
import { Model } from "sequelize";
class BaseSqlRepository implements IService{
    model:any;
    constructor(model:any){
        this.model = model;
    }
    create= async(body: any)=> {
        return await this.model.create(body);
    }
    getAll=  async()=> {
        return await this.model.findAll();
    }
    get = async(id: string) => {
        return await this.model.findByPk(id);
    }
    delete = async(id: string)=> {
        return await this.model.destroy({
            where: {
                id: id
            },
        });
    }
    update = async (id: string, body: any)=> {
        return await this.model.update
    }
}

export default BaseSqlRepository;