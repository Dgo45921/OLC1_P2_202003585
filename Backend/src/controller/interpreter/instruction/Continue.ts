import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Return as returncito } from "../abstract/Type";
import { Type } from "../abstract/Type";
import { Singleton } from "../Singleton";



export class Continue extends Instruction {
    constructor(
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public execute(env:Environment):any {
        return this

    }


    public ast() {
        const s = Singleton.getInstance()
        const nombreNodo = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${nombreNodo}[label="\\<Instruccion\\>\\Continue"];`)
      
    }

}