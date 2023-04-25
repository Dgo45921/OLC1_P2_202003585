import { Environment } from "../Enviroment";
import { Singleton } from "../Singleton";
import { Instruction } from "../abstract/Instruction";


export class Default extends Instruction {
    constructor(public insBlock:Instruction, line:number, column:number) {
        super(line, column)
    }

    public execute(ambito: Environment) {
        return this
    }


    public ast() {
        const s = Singleton.getInstance()
        const node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${node}[label="\\<Instruccion\\>\\nDefault"];
        ${node}->${node}1;
        ${node}->node_${this.insBlock.line}_${this.insBlock.column}_;`)
        this.insBlock.ast()
        
    }

    


}