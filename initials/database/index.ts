import { Sequelize } from "sequelize";
import sqlConnection from "@initials/database/mySqlConnection/dbConnection";
import mongoConnection from "@initials/database/mongoConnection/dbConnection";
import User from "@root/models/sql/user.model";
const sequelize = new Sequelize('open_project', 'root', 'password', {
    host: '127.0.0.1',
    port:8081,
    dialect: 'mysql'
});

const mongoURI='mongodb://127.0.0.1:27017/open_project';
const syncModel = async()=>{
    User.sync();
}
const connectDatbase= async ()=>{
    await sqlConnection(sequelize);
    await mongoConnection(mongoURI);
    await syncModel();
}

export {sequelize};
export default connectDatbase;
