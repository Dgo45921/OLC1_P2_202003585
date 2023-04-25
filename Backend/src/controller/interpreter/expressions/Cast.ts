import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";
import { Singleton } from "../Singleton";



export class Cast extends Expression {

    private expression: Expression
    private type : Type
    constructor(expression: Expression, type:Type, line: number, column: number) {
        super(line, column)
        this.expression = expression
        this.type = type
    }


    public execute(env: Environment): Return {
        const nodeValue = this.expression.execute(env)
        let badResponse = { value: "NULL", type: Type.NULL }
        switch (this.type) {
            case Type.INT:
                if(nodeValue.type === Type.DOUBLE || nodeValue.type === Type.CHAR){
                    return { value: parseInt(nodeValue.value), type: Type.INT }
                }

                return badResponse

            case Type.DOUBLE:
                if(nodeValue.type === Type.INT || nodeValue.type === Type.CHAR){
                    return { value: parseFloat(nodeValue.value), type: Type.DOUBLE }
                }
                return badResponse

            case Type.CHAR:
                if(nodeValue.type === Type.INT){
                    return { value: nodeValue.value.toString(), type: Type.CHAR }
                }

                return badResponse

            case Type.STRING:
                if(nodeValue.type === Type.DOUBLE || nodeValue.type === Type.INT){
                    return { value: nodeValue.value.toString(), type: Type.STRING }
                }

                return badResponse

            default:
                return badResponse
        }

    }

    public ast() {
        const node=`node_${this.line}_${this.column}_`
        return `
        /**/${node}1;
        ${node}1[label="casteo()"];
  
        ${node}1->${this.expression.ast()}
        `
    }

}