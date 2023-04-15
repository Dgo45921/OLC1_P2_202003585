import {Request, Response} from "express";
import { Environment } from "./interpreter/Enviroment";
import { Singleton } from "./interpreter/Singleton";
let global_env = new Environment(null);
let singleton = Singleton.getInstance()

class InterpreterController{
    public parsear(req:Request, res:Response){

        res.send("alaveragagag")
        
    }


    public interpretar(req:Request, res:Response){
        singleton.reset();
       let parser = require('../controller/interpreter/grammar');
       // console.log(req.body)
        let code = req.body.code
        // console.log(code);
        try{
            let ast = parser.parse(code);
            global_env = new Environment(null);
            for(const inst of ast){
                inst.execute(global_env);
            }

            res.json(
                {
                   console: singleton.getConsola()
                }
            )
            
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
