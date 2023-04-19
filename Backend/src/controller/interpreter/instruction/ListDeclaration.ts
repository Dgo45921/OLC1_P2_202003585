import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Type } from "../abstract/Type";
import { Error } from "../Error";
import { Singleton } from "../Singleton";


export class ListDeclaration extends Instruction {
    private id: string
    private type1: Type
    private type2: Type

    constructor(id: string, type: Type, type2: Type, line: number, column: number) {
        super(line, column)
        this.id = id
        this.type1 = type
        this.type2 = type2

    }


    public execute(env: Environment): any {
        if (this.type1 !== this.type2) {
            console.log('error semantico declaracion de vector dos tipos distintos')
        }
        else{
            if (this.type1 === Type.INT) {

                env.saveVariable(this.id, new Array(), Type.LIST_INT, this.line, this.column)
            }
            else if (this.type1 === Type.DOUBLE) {

                env.saveVariable(this.id, new Array(), Type.LIST_DOUBLE, this.line, this.column)
            }
            else if (this.type1 === Type.CHAR) {

                env.saveVariable(this.id, new Array(), Type.LIST_CHAR, this.line, this.column)
            }

            else if (this.type1 === Type.STRING) {

                env.saveVariable(this.id, new Array(), Type.LIST_STRING, this.line, this.column)
            }
            else if (this.type1 === Type.BOOLEAN) {

                env.saveVariable(this.id, new Array(), Type.LIST_BOOLEAN, this.line, this.column)
            }

        }

        




    }






}