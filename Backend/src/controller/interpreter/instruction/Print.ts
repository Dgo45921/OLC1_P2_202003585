import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression"
import { Instruction } from "../abstract/Instruction"
import { Singleton } from "../Singleton";

export abstract class Print extends Instruction {

    constructor(line:number, column:number, private expression:Expression) {
        super(line, column)
    }
    
    public execute(env:Environment) {
        const value = this.expression.execute(env);
        //console.log(value.value, value.type)
        console.log(value.value)
        Singleton.getInstance().appendConsole(value.value + "\n")
        

    }

    public ast() {
        const s = Singleton.getInstance()
        const node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${node}[label="\\<Instruccion\\>\\nPrint"];`)
        if (this.expression!= null){s.add_ast(`${node}->${this.expression.ast()}`)}
    }
}
    
