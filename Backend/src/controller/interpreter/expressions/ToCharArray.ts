import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";



export class ToCharArray extends Expression {

    private expression: Expression
    constructor(value: Expression, line: number, column: number) {
        super(line, column)
        this.expression = value
        }


    public execute(env: Environment): Return {
        const node = this.expression.execute(env)
        if (node.type === Type.STRING){
            return {value:node.value.split(''), type:Type.LIST}
        }


        return { value: "NULL", type: Type.NULL }

    }


    public ast() {
        const node=`node_${this.line}_${this.column}_`
        return `
        /**/${node}1;
        ${node}1[label="tochararray()"];
        ${node}[label="${this.expression}"];
        ${node}1->${node};
        `
    }

}

