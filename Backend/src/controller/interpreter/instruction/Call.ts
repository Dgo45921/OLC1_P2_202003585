import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Return } from "./Return";
import { Error } from "../Error";
import { Singleton } from "../Singleton";
import { Environment } from "../Enviroment";
import { FunctionDeclaration } from "./FunctionDeclaration";
import { MethodDeclaration } from "./MethodDeclaration";


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

        const metodo = env.getMethod(this.id);
        const instancia = Singleton.getInstance();


        let env_para_parametros = new Environment(env);


        if (metodo == null) {
            console.log('metodo no existente')
            return
        }
        if (metodo.parameters == undefined && this.parameters == undefined) {
            this.runInstructions(env_para_parametros);
        }
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
                let x = element.execute(env_para_parametros);
                if (x.type != metodo.parameters[cont].tipo) {
                    diferente = true;
                } else {
                    env_para_parametros.saveVariable(metodo.parameters[cont].id, x.value, x.type,this.line, this.column);
                }
                cont++;

            });
            if (diferente == false) {
                //metodo.bloque.ejecutar(env_para_parametros);
                this.runInstructions(env_para_parametros);
            } else {
                throw instancia.addError(new Error("Semantico", "El metodo " + this.id + " no tiene parametros del mismo tipo", this.line, this.column));
            }
        }





    }

    public runInstructions(env: Environment) {
        const metod:any = env.getMethod(this.id);
        //console.log(metodo);
        if (metod == null || metod == undefined) {
            return;
        }
        let instrucciones: any[] = metod.insBlock.instructions;
        //console.log(instrucciones);
        if(metod instanceof MethodDeclaration){
            for (const elemento of instrucciones) {
                try {
                    const x:any=elemento.execute(env);
                    if (x instanceof Return) {
                        return;
                    }
                } catch (error) {
                    //console.log(error);
                }
            }
        }else if(metod instanceof FunctionDeclaration){
            console.log("este es una funcion no un metodo")
            for (const elemento of instrucciones) {
                try {
                    const x:any=elemento.execute(env);
                    if (x instanceof Return) {
                        return;
                    }
                } catch (error) {
                    //console.log(error);
                }
            }
        }
    }


}