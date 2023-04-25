import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";



export class TypeOf extends Expression {

    private expression: Expression
    constructor(value: Expression, line: number, column: number) {
        super(line, column)
        this.expression = value
    }


    public execute(env: Environment): Return {
        const node = this.expression.execute(env)
        switch (node.type) {
            case Type.INT:
                return { value: "int", type: Type.STRING }

            case Type.DOUBLE:
                return { value: "double", type: Type.STRING }

            case Type.STRING:
                return { value: "string", type: Type.STRING }

            case Type.CHAR:
                return { value: "char", type: Type.STRING }

            case Type.BOOLEAN:
                return { value: "boolean", type: Type.STRING }

            case Type.VECTOR_BOOLEAN:
            case Type.VECTOR_CHAR:
            case Type.VECTOR_STRING:
            case Type.VECTOR_INT:
                return { value: "vector", type: Type.VECTOR }

            case Type.LIST_BOOLEAN:
            case Type.LIST_CHAR:
            case Type.LIST_STRING:
            case Type.LIST_INT:
                return { value: "lista", type: Type.LIST }

            default:
                return { value: "NULL", type: Type.NULL }
        }

    }

    public ast() {
        const node=`node_${this.line}_${this.column}_`
        return `
        /**/${node}1;
        ${node}1[label="typeOf()"];
  
        ${node}1->${this.expression.ast()}
        `
    }


}