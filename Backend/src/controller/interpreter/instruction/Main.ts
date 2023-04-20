import { Instruction } from "../abstract/Instruction";
import { Call } from "./Call";
import { Environment } from "../Enviroment";




export class Main extends Instruction {

    constructor(  public call: Call, line: number, column: number) {
        super(line, column);
    }

    public execute(env: Environment) {
        this.call.execute(env);
    }
  
}