interface IUser {
    name: string;
    email: string;
    password: string;
}
interface IUserService {
    getAllUsers() : any;
    createUser(user:IUser) :any;
}
export {
    IUser,
    IUserService,
};