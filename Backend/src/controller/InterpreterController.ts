import {Request, Response} from "express";
import { Environment } from "./interpreter/Enviroment";
import { Singleton } from "./interpreter/Singleton";
import { MethodDeclaration } from "./interpreter/instruction/MethodDeclaration";
import { FunctionDeclaration } from "./interpreter/instruction/FunctionDeclaration";
import { Main } from "./interpreter/instruction/Main";
import { VariableDeclaration } from "./interpreter/instruction/VariableDeclaration";
import { VectorDeclaration } from "./interpreter/instruction/VectorDeclaration";
import { ListDeclaration } from "./interpreter/instruction/ListDeclaration";
import { Instruction } from "./interpreter/abstract/Instruction";
import { IfStatement } from "./interpreter/instruction/IfStatement";
import { Switch } from "./interpreter/instruction/Switch";
import { ForLoop } from "./interpreter/instruction/ForLoop";
import { WhileLoop } from "./interpreter/instruction/WhileLoop";
import { DoWhileLoop } from "./interpreter/instruction/DoWhileLoop";
import { Call } from "./interpreter/instruction/Call";
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


              // genereate dot code for the symbol table

          //     for (const elemento of ast) {
          //       try {
          //         if ((elemento instanceof IfStatement || elemento instanceof Switch || elemento instanceof ForLoop || elemento instanceof WhileLoop || elemento instanceof DoWhileLoop  ||  elemento instanceof MethodDeclaration || elemento instanceof FunctionDeclaration )) {
          //           console.log(elemento)
          //         }
          //       } catch (error) {
          //         console.log(error); 
          //       }
          //     }

          //     singleton.symboltableDot += `</TABLE>
          //     >];
          // }`



            // for(const inst of ast){
            //     inst.execute(global_env);
            // }

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


}


export const interpreterController = new InterpreterController()
