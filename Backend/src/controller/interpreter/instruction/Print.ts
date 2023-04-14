import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression"
import { Instruction } from "../abstract/Instruction"

export abstract class Print extends Instruction {

    constructor(line:number, column:number, private expression:Expression) {
        super(line, column)
    }
    
    public execute(env: Environment) {
        const value = this.expression.execute(env);
        console.log(value.value)

    }
}
    
