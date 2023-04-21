import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Singleton } from "../Singleton";
import { Environment } from "../Enviroment";
import { Type } from "../abstract/Type";
import { Error } from "../Error";


export class ForLoop extends Instruction {
    constructor(
        public firstCondition: any,
        public Condition:Expression,
        public Step: Instruction|Expression,
        public insBlock:Instruction,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public execute(env:Environment) {
        const newEnv=new Environment(env);
        this.firstCondition.execute(newEnv);


        
        while(true){
            let exp=this.Condition.execute(newEnv);
            if(exp.value){
                this.insBlock.execute(newEnv);
                this.Step.execute(newEnv);
            }else{
                break;
            }
        }

        
    }

}