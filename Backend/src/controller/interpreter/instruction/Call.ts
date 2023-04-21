import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Return } from "./Return";
import { Error } from "../Error";
import { Singleton } from "../Singleton";
import { Environment } from "../Enviroment";
import { FunctionDeclaration } from "./FunctionDeclaration";
import { MethodDeclaration } from "./MethodDeclaration";
import { Return as returncito } from "../abstract/Type";
import { Type } from "../abstract/Type";


export class Call extends Instruction {
    constructor(
        public id: string,
        public parameters: Expression[],
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public execute(env: Environment) {

        if (this.id === "prueba2"){
            console.log("A")
        }

        const metodo = env.getMethod(this.id);
        const instancia = Singleton.getInstance();


        let parameter_env = new Environment(env);


        if (metodo == null) {
            console.log('metodo no existente')
            return
        }
        if (metodo.parameters == undefined && this.parameters == undefined) {
            return this.runInstructions(parameter_env);
        }
        else{
            if (metodo.parameters == undefined && this.parameters != undefined || metodo.parameters != undefined && this.parameters == undefined) {
                throw instancia.addError(new Error("Semantico", "El metodo " + this.id + " no tiene la misma cantidad de parameters", this.line, this.column));
            }
            if (metodo.parameters.length != this.parameters.length) {
                throw instancia.addError(new Error("Semantico", "El metodo " + this.id + " no tiene la misma cantidad de parameters", this.line, this.column));
            }
            if (metodo.parameters.length == this.parameters.length) {
                let diferente: Boolean = false;
                let cont: number = 0;
                this.parameters.forEach(element => {
                    let x = element.execute(parameter_env);
                    if (x.type != metodo.parameters[cont].tipo) {
                        diferente = true;
                    } else {
                        parameter_env.saveVariable(metodo.parameters[cont].id, x.value, x.type,this.line, this.column);
                    }
                    cont++;
    
                });
                if (diferente == false) {
                    //metodo.bloque.ejecutar(env_para_parametros);
                    return this.runInstructions(parameter_env);
                } else {
                    throw instancia.addError(new Error("Semantico", "El metodo " + this.id + " no tiene parametros del mismo tipo", this.line, this.column));
                }
            }
        }





    }

    public runInstructions(env: Environment):any {
        const func:any = env.getMethod(this.id);
        //console.log(metodo);
        if (func == null || func == undefined) {
            return;
        }
        let instrucciones: any[] = func.insBlock.instructions;
        // check if running a method or a function ------------------------------------------------------------
        if(func instanceof MethodDeclaration){
            for (const elemento of instrucciones) {
                try {
                    
                    const ins:any=elemento.execute(env);

                    if (ins instanceof Return) {
                        return null
                    }

                    
                } catch (error) {
                    console.log(error);
                }
            }
            return null
        }else if(func instanceof FunctionDeclaration){
            console.log("este es una funcion no un metodo")
            for (const elemento of instrucciones) {
                try {
                    const ins:any=elemento.execute(env);
                    if (ins instanceof Return) {
                        console.log(ins.Exp.execute(env))
                        return ins.Exp.execute(env);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }



}