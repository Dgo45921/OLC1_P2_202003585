import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";



export class Return extends Instruction {
    constructor(
        public Exp:Expression,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public execute(env:Environment) {
        return this;
    }


}