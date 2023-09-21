import 'module-alias/register';
import express from "express";
import { Request,Response } from "express";
const app = express();
import mongoConnection from "@initials/dbConnection";
import userRoute from "@routes/user.route";

const PORT:number =3567;

mongoConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req:Request, res:Response) => {
    res.send("welcome");
})

app.use('/api/v1/user',userRoute);
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
