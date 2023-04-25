import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Singleton } from "../Singleton";



export class ForLoop extends Instruction {
    constructor(
        public firstCondition: any,
        public Condition:Expression,
        public Step: Instruction|Expression,
        public insBlock:Instruction,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public execute(env:Environment) {
        const newEnv=new Environment(env);
        this.firstCondition.execute(newEnv);


        
        while(true){
            let exp=this.Condition.execute(newEnv);
            if(exp.value){
                this.insBlock.execute(newEnv);
                this.Step.execute(newEnv);
            }
            else break;
        }

        
    }

    public ast() {

        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nFor"];
        ${name_node}->node_${this.firstCondition.line}_${this.firstCondition.column}_;
        ${name_node}->${this.Condition.ast()}
        ${name_node}->node_${this.Step.line}_${this.Step.column}_;
        ${name_node}->node_${this.insBlock.line}block_${this.insBlock.column}_;
        `)
        this.firstCondition.ast();
        this.Condition.ast();
        this.Step.ast();
        this.insBlock.ast()

    }

}