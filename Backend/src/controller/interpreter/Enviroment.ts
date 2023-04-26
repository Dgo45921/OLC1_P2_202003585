import { Type } from "./abstract/Type";
import { MethodDeclaration } from "./instruction/MethodDeclaration";
import { Symbol } from "./Symbol";
import { Singleton } from "./Singleton";


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
      let singleton = Singleton.getInstance()
        let env: Environment | null = this;
  
      if (!env.variables.has(id.toLowerCase())) {

        if(this.prev){
          env.variables.set(id.toLowerCase(), new Symbol(value, id, type, 'local', line, column));
          singleton.variables.set(id.toLowerCase(),  new Symbol(value, id, type, 'local', line, column))
        }
        else{
          env.variables.set(id.toLowerCase(), new Symbol(value, id, type, 'global', line, column));
          singleton.variables.set(id.toLowerCase(),  new Symbol(value, id, type, 'global', line, column))
        }

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
            if (env.variables.has(nombre.toLowerCase())) return env.variables.get(nombre.toLowerCase());
            env = env.prev;
        }
        return null;
    }



    public saveMethod(name:string, value:any){
      let singleton = Singleton.getInstance()
      this.method_symbolTable.set(name.toLowerCase(), value)
      singleton.method_symbolTable.set(name.toLowerCase(), value)
    }

    public searchMethod(nombre: string): boolean {
      for (let entry of Array.from(this.method_symbolTable.entries())) {
          if (entry[0] == nombre.toLowerCase()) return true;
      }
      return false;
  }

  public getMethod(nombre: string): MethodDeclaration | undefined | null {
    let env: Environment | null = this;
    while (env != null) {
        if (env.method_symbolTable.has(nombre.toLowerCase())) return env.method_symbolTable.get(nombre.toLowerCase());
        env = env.prev;
    }
    return null;
}




}