import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";



export class Round extends Instruction {

    private expression: Expression
    constructor(value: Expression, line: number, column: number) {
        super(line, column)
        this.expression = value
    }


    public execute(env: Environment): Return {
        const node = this.expression.execute(env)
        if (node.type === Type.INT || node.type === Type.DOUBLE){
            return {value:round(node.value), type:Type.INT}
        }


        return { value: "NULL", type: Type.NULL }

    }

}


function round(value: number): number {
    const decimal = value - Math.floor(value); 
    if (decimal >= 0.5) {
      return Math.ceil(value);
    } else {
      return Math.floor(value);
    }
  }