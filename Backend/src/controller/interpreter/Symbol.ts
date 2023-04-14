import { Type } from "./abstract/Type";
export class Symbol {
    constructor(public value: any, public id: string, public type: Type, public editable:boolean) {}
}