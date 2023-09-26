"use strict";
import {Model} from 'sequelize';

interface UserAttributes {
    id:bigint;
    name:String;
    email:String;
    password:String;
    userRole:number;
    createdOn: Date;
    updatedOn: Date;
}

export const User = (sequelize: any, DataTypes: any) => {
    class User extends Model<UserAttributes> implements UserAttributes {
        id!:bigint;
        name!:String;
        email!:String;
        password!:String;
        userRole!:number;
        createdOn!: Date;
        updatedOn!: Date;
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
            type:DataTypes.String(100),
            allowNull:false,
            
        },
        email : {
            type:DataTypes.String(100),
            allowNull:false,

        },
        password : {
            type:DataTypes.String(100),
            allowNull:false,

        },
        userRole: {
            type:DataTypes.BIGINT,
            allowNull:false,
        },
        createdOn: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        updatedOn: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: true,
        }
    },
    {
        sequelize,
        modelName: "user",
        timestamps: false,
    });
    return User;
}

