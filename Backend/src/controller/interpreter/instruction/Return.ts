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

            let value = this.Exp.execute(env)

            let response:returncito = {value:value.value, type:value.type}
            return response

        }

 
            let response:returncito = {value:"NULL", type:Type.NULL}
            return response

    }


}