import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Return } from "./Return";


export class Block extends Instruction {
    constructor(

        public instructions: any[],
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public execute(env: Environment) {


        const new_env = new Environment(env);


        for (const ins of this.instructions) {
            try {
                const x: any = ins.execute(new_env);
                if (x instanceof Return) {
                    console.log("encontre un return en el bloque")
                    return x;
                }
            } catch (error) {
                //console.log("Error------------------------------------------------")
                //console.log(elemento);

            }
        }


    }


}