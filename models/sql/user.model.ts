"use strict";
import {Model} from 'sequelize';

interface UserAttributes {
    id:bigint;
    name:String;
    email:String;
    password:String;
    userRole:number;
}

export const User = (sequelize: any, DataTypes: any) => {
    class User extends Model<UserAttributes> implements UserAttributes {
        id!:bigint;
        name!:String;
        email!:String;
        password!:String;
        userRole!:number;
    }
    User.init(
    {
        id:{
            type: DataTypes.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name : {
            type:DataTypes.STRING(100),
            allowNull:false,
            
        },
        email : {
            type:DataTypes.STRING(100),
            allowNull:false,

        },
        password : {
            type:DataTypes.STRING(100),
            allowNull:false,

        },
        userRole: {
            type:DataTypes.BIGINT,
            allowNull:false,
        }
    },
    {
        sequelize,
        modelName: "user",
        timestamps: true,
    });
    return User;
}

