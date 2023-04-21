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


}