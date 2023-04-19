import { Type } from "./abstract/Type";

export class Parameter{
    constructor(public tipo:Type,public id:string,public line:number,public column:number){}
}