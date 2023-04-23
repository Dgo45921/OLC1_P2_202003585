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
        let env: Environment | null = this;
  
      if (!env.variables.has(id.toLowerCase())) {

        env.variables.set(id.toLowerCase(), new Symbol(value, id, type));
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
      this.method_symbolTable.set(name.toLowerCase(), value)
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


public graphST():string{
  let singleton = Singleton.getInstance()
  let vizCode:string="";
  let env: Environment | null = this;
  vizCode="[label=<<table border=\"0\" cellborder=\"1\" cellspacing=\"0\" width=\"100%\" height=\"100%\">\n";
  
  let contador:number=0;
  while (env != null) {
      vizCode+=`<tr><td colspan="4">NIVEL ${contador}</td></tr>\n`
      vizCode+=`<tr>
          <td>VALOR</td>
          <td>NOMBRE</td>
          <td>TIPO</td>
          <td>EDITABLE</td>
          </tr>\n`
      contador++;
      
      
     
  vizCode+=`</table>>];\n`
  //console.log(cadena);
  
}
 return vizCode;
}

}