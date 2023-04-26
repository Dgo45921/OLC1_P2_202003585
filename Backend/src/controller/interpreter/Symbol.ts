import { Type } from "./abstract/Type";
export class Symbol {

    public value :any
    public id:string
    public type : Type
    public scope: string
    public line:number
    public column:number

    constructor( value: any,  id: string,  type: Type, scope:string, line:number, column:number) {
        this.value = value
        this.id = id.toLowerCase()
        this.type = type
        this.scope = scope
        this.line = line
        this.column = column
    }
}