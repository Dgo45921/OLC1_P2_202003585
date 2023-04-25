
import { Singleton } from "../Singleton";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Break } from "./Break";
import { Continue } from "./Continue";



export class WhileLoop extends Instruction {
    constructor(
        public Condition:Expression,
        public insBlock:Instruction,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

   public execute(env: Environment) {
  const newEnv = new Environment(env);
  let exp = this.Condition.execute(newEnv);
  let contador = 0;

  outerLoop: while (contador < 1000) {
    if (exp.value) {
      let response = this.insBlock.execute(newEnv);
      contador++;
      exp = this.Condition.execute(env)

      if (response) {
        if (response instanceof Break) {
          break outerLoop;
        } else if (response instanceof Continue) {
          continue;
        }

        return response;
      }
    } else {
      break;
    }
  }
}



public ast() {
  const s = Singleton.getInstance()
  const name_node = `node_${this.line}_${this.column}_`
  s.add_ast(`
  ${name_node}[label="\\<Instruccion\\>\\nwhile"];
  ${name_node}1[label="\\<Condicion\\>"];
  ${name_node}->${name_node}1;
  ${name_node}1->${this.Condition.ast()}
  ${name_node}->node_${this.insBlock.line}block_${this.insBlock.column}_;        
  `)
  this.insBlock.ast()

}
}