import { Environment } from "../Enviroment";
import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";


export class Case extends Instruction {
    constructor(public condition:Expression, public insBlock:Instruction, line:number, column:number) {
        super(line, column)
    }

    public execute(ambito: Environment) {
        return this
    }


}