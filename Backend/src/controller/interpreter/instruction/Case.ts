import { Environment } from "../Enviroment";
import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Singleton } from "../Singleton";


export class Case extends Instruction {
    constructor(public condition:Expression, public insBlock:Instruction, line:number, column:number) {
        super(line, column)
    }

    public execute(ambito: Environment) {
        return this
    }


    public ast() {
        const s = Singleton.getInstance()
        const node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${node}[label="\\<Instruccion\\>\\nCase"];
        ${node}->${node}1;
        ${node}->node_${this.insBlock.line}_${this.insBlock.column}_;`)
        this.insBlock.ast()
        
    }

}