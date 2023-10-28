import { Sequelize } from "sequelize";
import sqlConnection from "@initials/database/mySqlConnection/dbConnection";
import mongoConnection from "@initials/database/mongoConnection/dbConnection";
import User from "@root/models/sql/user.model";
import Role from "@root/models/sql/role.model";
// import User from "@root/models/mongo/user.model";
const sequelize = new Sequelize('open_project', 'root', 'password', {
    host: '127.0.0.1',
    port:8081,
    dialect: 'mysql',
    logging: console.log,
});

const mongoURI='mongodb://127.0.0.1:27017/open_project';

const connectDatbase= async ()=>{
    

        await sqlConnection(sequelize);
        await mongoConnection(mongoURI);
    
}
async function syncModel() {
  try {
    // await User.sync();
    // await Role.sync();
    console.log('Models synchronized with the database.');
  } catch (error) {
    console.error('Error synchronizing models:', error);
  }
};

export {sequelize};
export default connectDatbase;
