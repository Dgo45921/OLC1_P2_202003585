import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";

export class LogicalOperation extends Expression {
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
        let valueLeft = this.leftExp.execute()
        let valueRight = this.rightExp.execute()

        let response:Return =  { value: 'error', type: Type.NULL}

        if (valueLeft.type !== Type.BOOLEAN || valueRight.type !== Type.BOOLEAN) {
            console.log('error semantico, operacion con datos no booleanos')
            return response
        }

        switch(this.sign){
            case '!':
                response = {value: !valueLeft.value, type:Type.BOOLEAN}
                break
            case '&&':
                response = {value: valueLeft.value && valueRight.value, type:Type.BOOLEAN}
                break
            case '||':
                response = {value: valueLeft.value || valueRight.value, type:Type.BOOLEAN}
                break
            default:
                console.log('error semantico en operacion logica')
                return { value: 'error', type: Type.NULL}
                
        }



        return response
    }


}