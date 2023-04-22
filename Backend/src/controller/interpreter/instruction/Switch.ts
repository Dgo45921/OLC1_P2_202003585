import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Singleton } from "../Singleton";
import { Environment } from "../Enviroment";
import { Type } from "../abstract/Type";
import { Error } from "../Error";
import { Break } from "./Break";
import { Case } from "./Case";
import { Default } from "./Default";


export class Switch extends Instruction {
    constructor(
        public condition: Expression,
        public caseBlock: Instruction[],
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public execute(env: Environment) {

        const new_env = new Environment(env);
        const instancia = Singleton.getInstance();
        let isvalid = this.condition.execute(new_env)

        console.log(this.caseBlock)




        for (const ins of this.caseBlock) {
            try {

                let response: any = ins.execute(new_env);

                if (ins instanceof Case) {

                    if(ins.condition.execute(new_env).value === isvalid.value){
                        let response: any = ins.insBlock.execute(new_env);

                        if (response instanceof Break) {
                            break ; 
                          } 

                          return response

                    }
                }
                else {

                    if(ins instanceof Default){
                        let response: any = ins.insBlock.execute(new_env);

                    if (response) {
                        return response
                    }

                    }
                    

                    
                }


            } catch (error) {
                //console.log("Error------------------------------------------------")
                //console.log(elemento);

            }
        }





    }

}