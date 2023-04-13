import {Request, Response} from "express";


class InterpreterController{
    public parsear(req:Request, res:Response){

        res.send("alaveragagag")
        
    }


    public interpretar(req:Request, res:Response){
       let parser = require('../controller/interpreter/grammar');
       // console.log(req.body)
        let code = req.body.code
        console.log(code);
        try{
            let ast = parser.parse(code);
            for(const inst of ast){
                inst.execute();
            }

            res.json({'state':'success', 'errors':null})
        }
        catch(err){
            res.json(
                {
                    consola:err,
                    errores:err,
                }
            )
        }
        
    }


}


export const interpreterController = new InterpreterController()
