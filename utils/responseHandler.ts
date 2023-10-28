import { response as res } from "express";
import { JsonResponse } from "@root/interfaces/utils";
export const successMessage = (resp:JsonResponse) =>{
    res.status(resp.statusCode).json({
        code :'success',
        messgae:resp.message,
        data :resp.data
    })
}