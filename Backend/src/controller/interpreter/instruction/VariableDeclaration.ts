import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Type } from "../abstract/Type";


export class VariableDeclaration extends Instruction{
    private id : string
    private type : Type
    private value: Expression | null
    constructor(id:string, type:Type, value:Expression|null, line:number, column:number){
        super(line, column)
        this.id = id
        this.type = type
        this.value = value
    }


    public execute(env:Environment):any{
        if(this.value!= null){
            const variable = this.value.execute(env)
            env.saveVariable(this.id, variable.value, this.type, this.line, this.column)
        }
        else{
            console.log('guardo segun valores por defecto')
        }
    }
}