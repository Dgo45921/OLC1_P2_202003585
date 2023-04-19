import { Instruction } from "../abstract/Instruction";
import { Singleton } from "../Singleton";
import { Environment } from "../Enviroment";
import { Error } from "../Error";
import { Parameter } from "../Parameter";
import { Type } from "../abstract/Type";


export class FunctionDeclaration extends Instruction {
    constructor(
        public type:Type,
        public id:string,
        public parameters:Parameter[],
        public insBlock: Instruction[],
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public execute(env:Environment) {
       
    
        const instancia=Singleton.getInstance();

        if(env.searchMethod(this.id)){
            console.log('error semantico funcion ya declarada')
        }
  
        env.saveMethod(this.id, this);


    }
  
}