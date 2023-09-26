import {router as userRoute} from "@routes/user.route";
import { Application } from "express";

const routes :any = (app:Application) =>{
    app.use('/api/v1/user',userRoute)
}
export {routes};