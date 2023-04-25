import { Instruction } from "../abstract/Instruction";
import { Error } from "../Error";
import { Singleton } from "../Singleton";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";



export class Asignation extends Instruction {
    constructor(
        public id: string,
        public exp:Expression,
        public line: number,
        public column: number
    ) {
        super(line, column);
    }


    public execute(env: Environment) {
        const instancia = Singleton.getInstance()
        let simbol=env.getVariable(this.id);

        if(simbol){
            simbol.value = this.exp.execute(env).value

        }
        

    }


    public ast() {
        const s = Singleton.getInstance()
        const nombreNodo = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${nombreNodo}[label="\\<Instruccion\\>\\nAsignacion variable"];
        ${nombreNodo}1[label="\\<Nombre\\>\\n${this.id}"];
        ${nombreNodo}->${nombreNodo}1
        `)  

        if (this.exp){
            s.add_ast(`${nombreNodo}->${this.exp.ast()}`)
        }
        

    }

}