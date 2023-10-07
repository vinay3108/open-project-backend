export interface UserAttributes {
    id?:bigint;
    name:String;
    email:String;
    password:String;
    userRole:number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

interface IUser extends Required<UserAttributes> {}


export {
    IUser,
};