import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";



export class Length extends Expression {

    private expression: Expression
    constructor(value: Expression, line: number, column: number) {
        super(line, column)
        this.expression = value
    }


    public execute(env: Environment): Return {
        const node = this.expression.execute(env)
        if (node.type === Type.STRING || node.type === Type.VECTOR_BOOLEAN || node.type === Type.VECTOR_CHAR || node.type === Type.VECTOR_STRING || node.type === Type.VECTOR_INT || node.type === Type.VECTOR_DOUBLE){
            return {value:node.value.length, type:Type.INT}
        }


        return { value: "NULL", type: Type.NULL }

    }

}

