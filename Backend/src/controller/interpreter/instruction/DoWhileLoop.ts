
import { Error } from "../Error";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Type } from "../abstract/Type";
import { Environment } from "../Enviroment";
import { Singleton } from "../Singleton";
import { Break } from "./Break";
import { Continue } from "./Continue";



export class DoWhileLoop extends Instruction {
    constructor(
        public Condition:Expression,
        public insBlock:Instruction,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public execute(env:Environment) {
        let counter = 0;
        const newEnv=new Environment(env);
         

         const x=this.Condition.execute(newEnv);
         const instancia=Singleton.getInstance();
         if(x.type!=Type.BOOLEAN){
             throw instancia.addError(new Error("Semántico","do while necesita condicion booleana ",this.line,this.column));
         }
         
         this.insBlock.execute(newEnv);
         while(true && counter<1000){
             let exp=this.Condition.execute(newEnv);
             if(exp.value==true){
                let response = this.insBlock.execute(newEnv);
                 counter++

                 if (response) {
                    if (response instanceof Break) {
                      break
                    } else if (response instanceof Continue) {
                      continue;
                    }
              
                    return response;
                  }
             }else{
                 break;
             }
         }

        
      

        
    }

}