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


}