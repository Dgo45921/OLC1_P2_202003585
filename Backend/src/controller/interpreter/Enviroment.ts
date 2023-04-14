import { Type } from "./abstract/Type";
import { Symbol } from "./Symbol";



export class Environment {
    private symbolTable: Map<string, Symbol>;
    private method_symbolTable: Map<string, any>;
 

    constructor(public prev: Environment | null) {
        this.symbolTable = new Map();
        this.method_symbolTable = new Map();

    }


    public getSymbolTable() {
        return this.symbolTable;
    }

    public saveVariable(name:string, value:any, type:Type, editable:boolean):boolean {
        if(!(this.searchVariable(name))){
            this.symbolTable.set(name, new Symbol(value, name, type, editable))
            return true
        }

        return false

    }

    public searchVariable(name: string): boolean {
        for (let entry of Array.from(this.symbolTable.entries())) {
            if (entry[0] == name) return true;
        }
        return false;
    }



}