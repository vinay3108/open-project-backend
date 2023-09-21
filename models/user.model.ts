import mongoose from "mongoose";
import  {IUser} from "@interfaces/user.interface";
const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: [ true, "Please Enter Your Name" ],
        maxlength: [ 30, "Name Cannot exceed 30 characters" ],
        minlength: [ 4, "Name Should have 4 characters" ],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: [ true, "Please Enter Your Password" ],
        minlength: [ 4, "Password Should be Greater than 8 Characters " ],
        select: false,
    },
})
const User=mongoose.model("User",userSchema);

export default User;