
"use strict";
import {Model,DataTypes} from 'sequelize';
import { sequelize } from '@root/initials/database';
import RoleAttributes from '@root/interfaces/role.interface';


class Role extends Model<RoleAttributes> implements RoleAttributes {
    id!:bigint;
    roleName!:String;
    departmentId!:bigint;
    
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
    Role.init(
    {
        id:{
            type:DataTypes.BIGINT,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true,
        },
        roleName:{
            type:DataTypes.STRING(100),
            allowNull:false,
            unique:true,
        },
        departmentId:{
            type:DataTypes.BIGINT,
            allowNull:false,
            unique:true,
        },
    },
    {
        sequelize,
        modelName: "role",
        timestamps: true,
    })

export default Role;