import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Return as returncito } from "../abstract/Type";
import { Type } from "../abstract/Type";



export class Break extends Instruction {
    constructor(
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public execute(env:Environment):any {
        return this

    }


}