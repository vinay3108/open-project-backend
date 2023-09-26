
const sqlConnection = async(sequelize:any)=>{
    try {
        await sequelize.authenticate().then(()=>{
            console.log('MYSQL Connection has been established successfully.');
        })
    }catch (error) {
        console.error('Unable to connect to the database:MYSQL', error);
    }
}

export default sqlConnection;
