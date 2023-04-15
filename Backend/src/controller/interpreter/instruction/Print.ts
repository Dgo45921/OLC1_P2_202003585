import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression"
import { Instruction } from "../abstract/Instruction"
import { Singleton } from "../Singleton";

export abstract class Print extends Instruction {

    constructor(line:number, column:number, private expression:Expression) {
        super(line, column)
    }
    
    public execute() {
        const value = this.expression.execute();
        //console.log(value.value, value.type)
        console.log(value.value)
        Singleton.getInstance().appendConsole(value.value + "\n")
        

    }
}
    
