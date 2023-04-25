import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";    
import { Parameter } from "../Parameter";
import { Singleton } from "../Singleton";


export class MethodDeclaration extends Instruction {
    constructor(
        public id:string,
        public parameters:Parameter[],
        public insBlock: Instruction,
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