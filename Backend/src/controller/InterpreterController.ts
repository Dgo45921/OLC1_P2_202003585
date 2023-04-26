import {Request, Response} from "express";
import { Environment } from "./interpreter/Enviroment";
import { Singleton } from "./interpreter/Singleton";
import { MethodDeclaration } from "./interpreter/instruction/MethodDeclaration";
import { FunctionDeclaration } from "./interpreter/instruction/FunctionDeclaration";
import { Main } from "./interpreter/instruction/Main";

let global_env = new Environment(null);
let singleton = Singleton.getInstance()
let ast


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
            ast = parser.parse(code);
            global_env = new Environment(null);


            // save the methods and functions declared
            for (const elemento of ast) {
                try {
                  if (elemento instanceof MethodDeclaration || elemento instanceof FunctionDeclaration) {
                    elemento.execute(global_env);
                  }
                } catch (error) {
                  console.log(error); 
                }
              }
        

              // saving all global variables declared
        
              for (const elemento of ast) {
                try {
                  if (!(elemento instanceof MethodDeclaration || elemento instanceof FunctionDeclaration || elemento instanceof Main)) {
                    elemento.execute(global_env);
                  }
                } catch (error) {
                  console.log(error); 
                }
              }

              // execute the program from the main method

              for (const elemento of ast) {
                try {
                  if ((elemento instanceof Main)) {
                    elemento.execute(global_env);
                  }
                } catch (error) {
                  console.log(error); 
                }
              }


               //generar el ast primero
        for (const instr of ast) {
          try {
              instr.ast();
          } catch (error) {
          }
      }

      for (const instr of ast) {
        try {
            singleton.add_ast(`RootNode->node_${instr.line}_${instr.column}_ \n;`)
        } catch (error) {
        }
    }




             
            res.json(
                {
                   console: singleton.getConsola()

                }
            )
            
        }
        catch(err){

            console.log('algo malo paso')
            console.log(err)
            res.json(
                {
                    console: singleton.getConsola()
                }
            )
        }
        
    }


    public getErrores(req:Request, res:Response){

        console.log(singleton.getErrorsViz())
        res.json(
            {
               dotCode: singleton.getErrorsViz()
            }
        )
        
       
        
    }

    public getAST(req:Request, res:Response){

      
      res.json(
          {
             vizcode: "digraph G {\nnode[shape=box];" + singleton.astViz + "\n}"
          }
      )
      
     
      
  }

  public getST(req:Request, res:Response){

      
    res.json(
        {
           vizcode: singleton.getST()
        }
    )
    
   
    
}


}


export const interpreterController = new InterpreterController()
