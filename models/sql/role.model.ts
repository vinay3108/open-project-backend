
"use strict";
import {Model} from 'sequelize';

interface RoleAttributes {
    id:bigint,
    roleId:bigint;
    roleName:String;
    departmentId:bigint;
    createdOn: Date;
    updatedOn: Date;
}
