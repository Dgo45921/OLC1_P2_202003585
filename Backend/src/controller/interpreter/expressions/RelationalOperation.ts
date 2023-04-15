import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";

export class RelationalOperation extends Expression {
    constructor(
        private leftExp:Expression,
        private rightExp:Expression,
        private sign:string,
        line:number,
        column:number
    ){
        super(line, column)
    }

    public execute(): Return {
        let response:Return =  { value: 'error', type: Type.NULL}
        let valueLeft = this.leftExp.execute()
        let valueRight = this.rightExp.execute()

        if (valueLeft.type === Type.NULL || valueRight.type === Type.NULL) {
            console.log('error semantico, operacion relacional con null')
            return response
        }

        switch(this.sign){
            case '==':
                response = {value: valueLeft.value == valueRight.value, type:Type.BOOLEAN}
                break
            case'!=':
                response = {value: valueLeft.value != valueRight.value, type:Type.BOOLEAN}
                break
            case'<':
                response = {value: valueLeft.value < valueRight.value, type:Type.BOOLEAN}
                break
            case'>':
                response = {value: valueLeft.value > valueRight.value, type:Type.BOOLEAN}
                break
            case'<=':
                response = {value: valueLeft.value <= valueRight.value, type:Type.BOOLEAN}
                break
            case'>=':
                response = {value: valueLeft.value >= valueRight.value, type:Type.BOOLEAN}
                break
            
            default:
                console.log('error semantico relational ....')
                return { value: 'error', type: Type.NULL}
                



        }


        return response
    }

}