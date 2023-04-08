import {Request, Response} from "express";


class InterpreterController{
    public pong(req:Request, res:Response){
        res.send("alaveragagag")
    }


}


export const interpreterController = new InterpreterController()
