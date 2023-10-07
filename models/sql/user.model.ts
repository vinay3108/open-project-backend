"use strict";
import {Model,DataTypes} from 'sequelize';
import { sequelize } from '@root/initials/database';
import { UserAttributes } from '@root/interfaces/user.interface';

export interface UserInput extends Required<UserAttributes> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes> implements UserAttributes {
        
        id!:bigint;
        name!:String;
        email!:String;
        password!:String;
        userRole!:number;

        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;
        public readonly deletedAt!: Date;
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
    })

export default User;

