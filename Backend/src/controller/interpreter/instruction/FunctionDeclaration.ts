import { Instruction } from "../abstract/Instruction";
import { Singleton } from "../Singleton";
import { Environment } from "../Enviroment";
import { Error } from "../Error";
import { Parameter } from "../Parameter";
import { Type } from "../abstract/Type";


export class FunctionDeclaration extends Instruction {
    constructor(
        public type:Type,
        public id:string,
        public parameters:Parameter[],
        public insBlock: Instruction,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public execute(env:Environment) {
       
    
        const instancia=Singleton.getInstance();

        if(env.searchMethod(this.id)){
            console.log('error semantico funcion ya declarada')
        }
  
        env.saveMethod(this.id, this);


    }


    public ast() {
        
        const s= Singleton.getInstance()
        const node=`node_${this.line}_${this.column}_`
        s.add_ast(`
        ${node} [label="\\<Instruccion\\>\\nMetodoDeclaracion"];
        ${node}1[label="\\<Nombre\\>\\n${this.id}"];
        ${node}2[label="\\<Parametros\\>"];
        ${node}->${node}1;
        ${node}->${node}2;
        ${node}->node_${this.insBlock.line}_${this.insBlock.column}_;
        `)
        this.insBlock.ast();
        
        if(this.parameters){
            let tmp = 5 
        this.parameters.forEach(x => {
            s.add_ast(`
            ${node}${tmp}[label="\\<Nombre,Tipo\\>\\n${x}"];
            ${node}2->${node}${tmp};
            `)
            tmp++
        })
        }
    }
  
}