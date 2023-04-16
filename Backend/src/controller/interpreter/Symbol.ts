import { Type } from "./abstract/Type";
export class Symbol {

    public value :any
    public id:string
    public type : Type

    constructor( value: any,  id: string,  type: Type) {
        this.value = value
        this.id = id.toLowerCase()
        this.type = type
    }
}