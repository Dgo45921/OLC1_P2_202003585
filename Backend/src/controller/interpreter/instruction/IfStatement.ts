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

    public execute(env: Environment) {
        const nuevoEnv = new Environment(env);
        const instancia = Singleton.getInstance();
        let isvalid = this.condition.execute(nuevoEnv);
      
        if(isvalid.type!==Type.BOOLEAN){
            throw instancia.addError(new Error("Semantico","Sentencia if requiere una condicion booleana ",this.line,this.column));
        }
      
        if (isvalid.value) {
          let response = this.trueBlock.execute(nuevoEnv);
          if (response) {
            return response;
          }
        } else {
          if (this.falseBlock) {
            let response = this.falseBlock.execute(nuevoEnv);
            if (response) {
              return response;
            }
          }
        }
      }
      

      public ast() {
        const s = Singleton.getInstance()
        const node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${node}[label="\\<Instruccion\\>\\nif"];
        ${node}1[label="\\<True\\>"];
        ${node}2[label="\\<Else\\>"];
        ${node}->${node}1;
        ${node}->${node}2;
        ${node}1->node_${this.trueBlock.line}block_${this.trueBlock.column}_;`)
        this.trueBlock.ast()
        if (this.falseBlock) {
            s.add_ast(`${node}2->node_${this.falseBlock.line}block_${this.falseBlock.column}_`)
            this.falseBlock.ast()
        }
    }

}