import { Response } from "express";
import { JsonResponse } from "@root/interfaces/utils";
export const successMessage = (res:Response, resp:JsonResponse) =>{
    res.status(resp.statusCode).json({
        code :'success',
        messgae:resp.message,
        data :resp.data
    })
}