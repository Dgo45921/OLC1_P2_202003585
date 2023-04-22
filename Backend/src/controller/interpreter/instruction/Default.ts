import { Environment } from "../Enviroment";
import { Instruction } from "../abstract/Instruction";


export class Default extends Instruction {
    constructor(public insBlock:Instruction, line:number, column:number) {
        super(line, column)
    }

    public execute(ambito: Environment) {
        return this
    }


}