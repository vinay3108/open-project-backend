import mongoose from "mongoose";
const mongoConnection=async(mongoURI:string)=>{
    mongoose.connect(mongoURI)
    .then(()=>{
        console.log('connected to MONGODB');
    })
    .catch((err)=>{
        console.log(`error connecting to MONGODB: ${err}`);
    });
}
export default mongoConnection;
