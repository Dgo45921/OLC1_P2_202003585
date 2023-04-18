import { Type } from "./abstract/Type";
export class Symbol {

    public value :any
    public id:string
    public type : Type
    public size:number

    constructor( value: any,  id: string,  type: Type, size:number) {
        this.value = value
        this.id = id.toLowerCase()
        this.type = type
        this.size = size
    }
}