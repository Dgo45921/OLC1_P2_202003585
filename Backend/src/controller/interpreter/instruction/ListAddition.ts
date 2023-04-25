import { Instruction } from "../abstract/Instruction";
import { Error } from "../Error";
import { Singleton } from "../Singleton";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";


export class ListAddition extends Instruction {
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

        if(simbol !== null || simbol !== undefined){
            if(simbol?.value && Array.isArray(simbol.value)){
                simbol.value.push(this.exp.execute(env).value)

            }
        }
        

    }

    public ast() {
        
         const s = Singleton.getInstance()
        const node = `node_${this.line}_${this.column}_`
        const label =  "AdicionLista"

        s.add_ast(`
        ${node}[label="\\<Instruccion\\>\\n${label}"];
        ${node}1[label="{${this.id}}"];
        ${node}2[label="{${this.id}}"];
        ${node}->${node}1;
        `)
        }
     



}