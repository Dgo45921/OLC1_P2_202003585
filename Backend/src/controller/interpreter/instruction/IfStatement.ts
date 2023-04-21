import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Singleton } from "../Singleton";
import { Environment } from "../Enviroment";
import { Type } from "../abstract/Type";
import { Error } from "../Error";


export class IfStatement extends Instruction {
    constructor(
        public condition:Expression,
        public trueBlock: Instruction,
        public falseBlock: Instruction|null,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public execute(env:Environment) {

        const nuevoEnv=new Environment(env);
        const instancia=Singleton.getInstance();
        let isvalid = this.condition.execute(nuevoEnv)

        console.log(isvalid)
        if(this.condition.execute(nuevoEnv).type!==Type.BOOLEAN){
            throw instancia.addError(new Error("Semantico","Sentencia if requiere una condicion booleana ",this.line,this.column));
        }

        

        if(this.condition.execute(nuevoEnv).value){
            return this.trueBlock.execute(nuevoEnv)
            }
        else{

            if(this.falseBlock){
                return this.falseBlock.execute(nuevoEnv)
            }
        }

        
    }

}