import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";
import { Error } from "../Error";
import { Singleton } from "../Singleton";


export class ListDeclaration extends Instruction {
    private id: string
    private type1: Type
    private type2: Type
    private value: any

    constructor(id: string, type: Type, type2: Type, value:any, line: number, column: number) {
        super(line, column)
        this.id = id
        this.type1 = type
        this.type2 = type2
        this.value = value

    }


    public execute(env: Environment): any {
        if (this.type1 !== this.type2) {
            console.log('error semantico declaracion de vector dos tipos distintos')
        }
        else{
            if(this.value === null){
                if (this.type1 === Type.INT) {

                    env.saveVariable(this.id, new Array(), Type.LIST_INT, this.line, this.column)
                }
                else if (this.type1 === Type.DOUBLE) {
    
                    env.saveVariable(this.id, new Array(), Type.LIST_DOUBLE, this.line, this.column)
                }
                else if (this.type1 === Type.CHAR) {
    
                    env.saveVariable(this.id, new Array(), Type.LIST_CHAR, this.line, this.column)
                }
    
                else if (this.type1 === Type.STRING) {
    
                    env.saveVariable(this.id, new Array(), Type.LIST_STRING, this.line, this.column)
                }
                else if (this.type1 === Type.BOOLEAN) {
    
                    env.saveVariable(this.id, new Array(), Type.LIST_BOOLEAN, this.line, this.column)
                }
            }
            else{
                this.value = (this.value).replaceAll('"','');
                this.value = (this.value).replaceAll("\\n","\n");
                this.value = (this.value).replaceAll("\\t","\t");
                
                env.saveVariable(this.id, this.value.split(''), Type.LIST_STRING, this.line, this.column)
                
               
            }

        }

        




    }


    public ast() {
        const s = Singleton.getInstance()
        const node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${node}[label="\\<Instruccion\\>\\nLista Declaracion"];
        ${node}1[label="\\<Nombre\\>\\n{${this.id}}"];
        ${node}2[label="\\<Tipo\\>\\n${this.type1}"];
        ${node}3[label="\\<Contenido\\>"];
        ${node}->${node}1;
        ${node}->${node}2;
        ${node}->${node}3;
        `)
        this.value.forEach((element: { ast: () => any; }) => {
            s.add_ast(`
            ${node}3->${element.ast()}
            `)
        })
    }

}





