import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";



export class Truncate extends Expression {

    private expression: Expression
    constructor(value: Expression, line: number, column: number) {
        super(line, column)
        this.expression = value
    }


    public execute(env: Environment): Return {
        const node = this.expression.execute(env)
        if (node.type === Type.INT || node.type === Type.DOUBLE){
            return {value:truncate(node.value), type:Type.INT}
        }


        return { value: "NULL", type: Type.NULL }

    }


    public ast() {
        const node=`node_${this.line}_${this.column}_`
        return `
        /**/${node}1;
        ${node}1[label="truncate()"];
  
        ${node}1->${this.expression.ast()}
        `
    }


}


function truncate(valor: number): number {
    return Math.trunc(valor); // Utilizamos Math.trunc() para eliminar los decimales y obtener el entero
  }