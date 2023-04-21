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

        const instancia=Singleton.getInstance();
        let isvalid = this.condition.execute(env)

        console.log(isvalid)
        if(this.condition.execute(env).type!==Type.BOOLEAN){
            throw instancia.addError(new Error("Semantico","Sentencia if requiere una condicion booleana ",this.line,this.column));
        }

        

        if(this.condition.execute(env).value){
            return this.trueBlock.execute(env)
            }
        else{

            if(this.falseBlock){
                return this.falseBlock.execute(env)
            }
        }

        
    }

}