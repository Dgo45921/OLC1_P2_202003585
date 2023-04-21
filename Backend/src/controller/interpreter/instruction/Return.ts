import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Return as returncito } from "../abstract/Type";
import { Type } from "../abstract/Type";



export class Return extends Instruction {
    constructor(
        public Exp:Expression,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public execute(env:Environment):any {
        if(this.Exp){
            return this;
        }
        else{
            return {value:"NULL", type:Type.NULL};
        }
    }


}