import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";

export class Primitive extends Expression{
    constructor(
        line:number,
        column:number,
        private value:any,
        private type:Type


    ){
        super(line, column)
    }

    public execute():Return {
        return {value:this.value, type: this.type}
    }
}

