import { Instruction } from "../abstract/Instruction";
import { Call } from "./Call";
import { Environment } from "../Enviroment";
import { Singleton } from "../Singleton";




export class Main extends Instruction {

    constructor(  public call: Call, line: number, column: number) {
        super(line, column);
    }

    public execute(env: Environment) {
        this.call.execute(env);
    }

    public ast() {
        
        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        const label = "Main" 

        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\n${label}"];
        ${name_node}1[label="{${this.call.id}}"];
        ${name_node}->${name_node}1;
        `)
        

        
    }

}