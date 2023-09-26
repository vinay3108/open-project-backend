interface IService {
    getAll() : any;
    get(id:string):any;
    create(body:any) :any;
    update(id:string,body:any):any;
    delete(id:string):any;
}
export {IService};