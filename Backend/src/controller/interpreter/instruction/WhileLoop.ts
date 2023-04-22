

import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Break } from "./Break";
import { Continue } from "./Continue";



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

        outerLoop: while (true && contador < 1000) {
            if (exp.value) {
              let response = this.insBlock.execute(newEnv);
              contador++;
          
              if (response) {
                if (response instanceof Break) {
                  break outerLoop; 
                } else if (response instanceof Continue) {
                  continue;
                }
          
                return response;
              }
            } else {
              break;
            }
          }
          

        
    }

}