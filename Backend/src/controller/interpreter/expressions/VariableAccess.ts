import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Type";
import { Environment } from "../Enviroment";
import { Type } from "../abstract/Type";



export class VariableAccess extends Expression{

    public id : string
    line:number
    column:number

    constructor(id:string, line:number, column:number){
        super(line, column)
        this.id =id
        this.line = line
        this.column= column
        

    }

    


    public execute(env:Environment):Return{
        let response:Return = {value:null, type:Type.NULL}
        const idTosearch=env.getVariable(this.id)
        if (idTosearch){
            response = {value:idTosearch.value, type: idTosearch.type}
        }

        return response

    }

}
