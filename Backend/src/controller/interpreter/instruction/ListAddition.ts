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
        //analisis semantico
        const instancia = Singleton.getInstance()
        let simbol=env.getVariable(this.id);

        if(simbol !== null || simbol !== undefined){
            if(simbol?.value && Array.isArray(simbol.value)){
                simbol.value.push(this.exp.execute(env).value)

            }
        }
        

    }


}