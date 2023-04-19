import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";    
import { Parameter } from "../Parameter";


export class MethodDeclaration extends Instruction {
    constructor(
        public id:string,
        public parameters:Parameter[],
        public insBlock: Instruction[],
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public execute(env:Environment) {
       


        if(env.searchMethod(this.id)){
            console.log('no se hallo el metodo ')
        }
        
        console.log(this);
        env.saveMethod(this.id, this);


    }


}