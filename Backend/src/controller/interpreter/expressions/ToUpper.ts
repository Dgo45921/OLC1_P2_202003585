import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";



export class ToUpper extends Expression {

    private expression: Expression
    constructor(value: Expression, line: number, column: number) {
        super(line, column)
        this.expression = value
    }


    public execute(env: Environment): Return {
        const node = this.expression.execute(env)
        if (node.type === Type.STRING){
            return {value:node.value.toUpperCase(), type:Type.STRING}
        }


        return { value: "NULL", type: Type.NULL }

    }


    public ast() {
        const node=`node_${this.line}_${this.column}_`
        return `
        /**/${node}1;
        ${node}1[label="toupper()"];
        ${node}[label="${this.expression}"];
        ${node}1->${node};
        `
    }

}