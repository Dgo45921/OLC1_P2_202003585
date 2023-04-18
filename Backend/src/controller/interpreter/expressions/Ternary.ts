import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";



export class Ternary extends Instruction {

    private expression1: Expression
    private expression2: Expression
    private expression3: Expression
    constructor(expression1: Expression,expression2:Expression, expression3:Expression , line: number, column: number) {
        super(line, column)
        this.expression1 = expression1
        this.expression2 = expression2
        this.expression3 = expression3
    }


    public execute(env: Environment): Return {
        let badResponse:Return = {value:null, type: Type.NULL}
        const conditionResult = this.expression1.execute(env)
        const return1 = this.expression2.execute(env)
        const return2 = this.expression3.execute(env)

        if(conditionResult.type !== Type.BOOLEAN) return badResponse

        if(conditionResult.value) return  {value:return1.value, type: return1.type}
        else return  {value:return2.value, type: return2.type}
    

    }

}