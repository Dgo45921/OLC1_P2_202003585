import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Type";
import { Environment } from "../Enviroment";
import { Type } from "../abstract/Type";



export class VectorAccess extends Expression {

    public id: string
    public index: Expression
    line: number
    column: number

    constructor(id: string, index: Expression, line: number, column: number) {
        super(line, column)
        this.id = id
        this.line = line
        this.column = column
        this.index = index

    }




    public execute(env: Environment): Return {
        let badResponse: Return = { value: null, type: Type.NULL }
        const idTosearch = env.getVariable(this.id)
        const index = this.index.execute(env)




        if (idTosearch?.value && Array.isArray(idTosearch.value)) {
            if(idTosearch.type === Type.VECTOR_INT){
               
                return {value:idTosearch.value[index.value], type: Type.INT}
                

            }

            else if(idTosearch.type === Type.VECTOR_DOUBLE){
                return {value:idTosearch.value[index.value], type: Type.DOUBLE}
            }


            else if(idTosearch.type === Type.VECTOR_BOOLEAN){
                return {value:idTosearch.value[index.value], type: Type.BOOLEAN}
            }

            else if(idTosearch.type === Type.VECTOR_STRING){
                return {value:idTosearch.value[index.value], type: Type.STRING}
            }

            else if(idTosearch.type === Type.VECTOR_CHAR){
                return {value:idTosearch.value[index.value], type: Type.CHAR}
            }
              
        }


        return badResponse

    }

}
