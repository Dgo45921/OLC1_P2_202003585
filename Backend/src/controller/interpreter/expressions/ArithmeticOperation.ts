import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";


export class ArithmeticOperation extends Expression {
    
    constructor(
        private leftExp:Expression,
        private rightExp:Expression,
        private sign:string,
        line:number,
        column:number
    ){
        super(line, column)
    }

    

    public execute(env: Environment): Return {
        switch (this.sign){
            
            


        }

        return { value: 'a', type: Type.BOOLEAN}
    }

}
