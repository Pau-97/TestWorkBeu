import { NextFunction, Request, Response } from "express";
import { myApi } from "../../../../config";

export const apiKeyValidate = async (req: Request, res: Response, next: NextFunction) => {

    const { apikey } = req.query;
    
    if(apikey !== myApi.myApiKey){
        return res.status(400).json({
            status: "false",
            errorCode: 'invalidToken',
            errorMessage: 'Invalid token'
        });
    }

    next();
};
