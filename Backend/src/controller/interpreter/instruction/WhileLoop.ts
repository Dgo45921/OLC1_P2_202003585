

import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";



export class WhileLoop extends Instruction {
    constructor(
        public Condition:Expression,
        public insBlock:Instruction,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public execute(env:Environment) {
        const newEnv=new Environment(env);
        let exp=this.Condition.execute(newEnv);
        let contador  = 0

        while(true && contador<1000){
            if(exp.value){
                this.insBlock.execute(newEnv);
                contador++
            }
            else{
                break

            }
            exp = this.Condition.execute(env)   
        }

        
      

        
    }

}