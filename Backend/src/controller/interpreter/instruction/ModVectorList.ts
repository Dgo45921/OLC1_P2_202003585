import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Type";
import { Environment } from "../Enviroment";
import { Type } from "../abstract/Type";
import { Instruction } from "../abstract/Instruction";



export class ModVectorList extends Instruction {

    public id: string
    public index: Expression
    public newValue:Expression
    line: number
    column: number

    constructor(id: string, index: Expression, newValue:Expression, line: number, column: number) {
        super(line, column)
        this.id = id
        this.line = line
        this.column = column
        this.index = index
        this.newValue = newValue

    }




    public execute(env: Environment) {
        
        const idTosearch = env.getVariable(this.id)
        const index = this.index.execute(env)
        const value = this.newValue.execute(env)




        if (idTosearch?.value && Array.isArray(idTosearch.value)) {
            idTosearch.value[index.value] = value.value
              
        }


       


  

    }

}
