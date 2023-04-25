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
        public insBlock: Instruction[],
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
        const nombre_nodo=`node_${this.line}_${this.column}_`
        s.add_ast(`
        ${nombre_nodo} [label="\\<Instruccion\\>\\nFuncionDeclaracion"];
        ${nombre_nodo}1[label="\\<Nombre\\>\\n${this.id}"];
        ${nombre_nodo}2[label="\\<Parametros\\>"];
        ${nombre_nodo}->${nombre_nodo}1;
        ${nombre_nodo}->${nombre_nodo}2;

        `)
    
        this.insBlock.forEach(x => {
            s.add_ast(`${nombre_nodo}->node_${x.line}_${x.column}_;`)
            x.ast()
        })

       
        
        let tmp = 5 
        this.parameters.forEach(x => {
            s.add_ast(`
            ${nombre_nodo}${tmp}[label="\\<Nombre,Tipo\\>\\n${x}"];
            ${nombre_nodo}2->${nombre_nodo}${tmp};
            `)
            tmp++
        })
    }
  
}