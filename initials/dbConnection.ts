import mongoose from "mongoose";
const mongoConnection=async()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/open_project')
    .then(()=>{
        console.log('connected to MONGODB');
    })
    .catch((err)=>{
        console.log(`error connecting to MONGODB: ${err}`);
    });
}
export default mongoConnection;
