import { Type } from "./abstract/Type";
import { Symbol } from "./Symbol";



export class Environment {
    private variables: Map<string, Symbol>;
    private method_symbolTable: Map<string, any>;
 

    constructor(public prev: Environment | null) {
        this.variables = new Map();
        this.method_symbolTable = new Map();

    }


    public getVariables() {
        return this.variables;
    }

    public saveVariable(id:string, value:any, type:Type, line:number, column:number):void{
        let env: Environment | null = this;
  
      if (!env.variables.has(id.toLowerCase())) {

        env.variables.set(id.toLowerCase(), new Symbol(value, id, type, 0));
      }else {
        console.log('error, variable ya definida')

      }
  

    }


    public saveVector(id:string, value:any, type:Type, line:number, column:number, size:number):void{
        let env: Environment | null = this;
  
      if (!env.variables.has(id.toLowerCase())) {

        env.variables.set(id.toLowerCase(), new Symbol(value, id, type, size));
      }else {
        console.log('error, variable ya definida')

      }
  

    }

    public searchVariable(name: string): boolean {
        for (let entry of Array.from(this.variables.entries())) {
            if (entry[0] == name) return true;
        }
        return false;
    }

    public getVariable(nombre: string): Symbol | undefined | null {
        let env: Environment | null = this;
        while (env != null) {
            if (env.variables.has(nombre)) return env.variables.get(nombre);
            env = env.prev;
        }
        return null;
    }



}