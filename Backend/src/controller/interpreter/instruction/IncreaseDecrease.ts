import { Instruction } from "../abstract/Instruction";
import { Error } from "../Error";
import { Singleton } from "../Singleton";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";


export class IncreaseDecrease extends Instruction {
    constructor(
        public id: string,
        public op:string,
        public line: number,
        public column: number
    ) {
        super(line, column);
    }


    public execute(env: Environment) {
        const instancia = Singleton.getInstance()
        let simbol=env.getVariable(this.id);
        console.log(simbol)
        if(simbol){
            if(this.op === '++'){
                simbol.value = simbol.value +1
            }
            else{
                simbol.value = simbol.value -1
            }
        }
        

    }

    public ast() {
        if(this.op === '--'){
            const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        const label =  "Decremento"

        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\n${label}"];
        ${name_node}1[label="${this.id}--"];
        ${name_node}->${name_node}1;
        `)
        }
        else{
            const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        const label = "Incremento" 

        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\n${label}"];
        ${name_node}1[label="${this.id}++"];
        ${name_node}->${name_node}1;
        `)
        }

        
    }


}