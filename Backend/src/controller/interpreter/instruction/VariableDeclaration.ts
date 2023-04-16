import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Type } from "../abstract/Type";
import { Error } from "../Error";


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
           switch(this.type){
            case Type.INT:
                env.saveVariable(this.id, 0, this.type, this.line, this.column)
                break
            case Type.DOUBLE:
                env.saveVariable(this.id, 0.0, this.type, this.line, this.column)
                break

            case Type.BOOLEAN:
                env.saveVariable(this.id, true, this.type, this.line, this.column)
                break
            case Type.CHAR:
                env.saveVariable(this.id, '\u0000', this.type, this.line, this.column)
                break

            case Type.STRING:
                env.saveVariable(this.id, "", this.type, this.line, this.column)
                break

           }
        }
    }
}