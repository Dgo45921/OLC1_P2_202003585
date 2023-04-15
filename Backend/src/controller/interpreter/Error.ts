export class Error{
    constructor(public type:string,public description:string,public line:number,public column:number){}
}