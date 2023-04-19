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
                return { value: "INT", type: Type.STRING }

            case Type.DOUBLE:
                return { value: "DOUBLE", type: Type.STRING }

            case Type.STRING:
                return { value: "STRING", type: Type.STRING }

            case Type.CHAR:
                return { value: "CHAR", type: Type.STRING }

            case Type.BOOLEAN:
                return { value: "BOOLEAN", type: Type.STRING }

            case Type.VECTOR_BOOLEAN:
            case Type.VECTOR_CHAR:
            case Type.VECTOR_STRING:
            case Type.VECTOR_INT:
                return { value: "VECTOR", type: Type.VECTOR }

            case Type.LIST_BOOLEAN:
            case Type.LIST_CHAR:
            case Type.LIST_STRING:
            case Type.LIST_INT:
                return { value: "LIST", type: Type.LIST }

            default:
                return { value: "NULL", type: Type.NULL }
        }

    }

}