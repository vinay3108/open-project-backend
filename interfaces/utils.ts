import { UserAttributes } from "./user.interface";
export type statusCode= 200 | 201 | 400 |404 | 500;


export type JsonResponse= {
    statusCode: statusCode
    message?: string;
    data?: any;
};