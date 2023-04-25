import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Break } from "./Break";
import { Continue } from "./Continue";
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
      
            if (x) {
              if (x instanceof Break) {
                return x;
              } else if (x instanceof Continue) {
                return x;
              }
      
              return x;
            }
          } catch (error) {
            // Handle error as needed
          }
        }
      }
      


}