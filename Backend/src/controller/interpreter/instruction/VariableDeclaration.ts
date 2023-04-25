import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Type } from "../abstract/Type";
import { Error } from "../Error";
import { Singleton } from "../Singleton";


export class VariableDeclaration extends Instruction{
    private id : string
    private type : Type
    private value: Expression | null
    constructor(id:string, type:Type, value:Expression|null, line:number, column:number){
        super(line, column)
        this.id = id
        this.type = type
        this.value = value
    }


    public execute(env:Environment):any{
        const singleton = Singleton.getInstance()
        if(this.value!= null){
            const variable = this.value.execute(env)
            if (variable.type === this.type){
                env.saveVariable(this.id, variable.value, this.type, this.line, this.column)
            }
            else{
                const consoleResponse = 'Error semántico: '+ `La variable declarada como '${this.id}' debe de ser de tipo ${Type[this.type]}` + ' genere el reporte de errores para mas detalles'
                singleton.appendConsole(consoleResponse)
                throw singleton.addError(new Error("Semantico",`La variable declarada como '${this.id}' debe de ser de tipo ${Type[this.type]}`,this.line,this.column));
            }
            
        }
        else{
           switch(this.type){
            case Type.INT:
                env.saveVariable(this.id, 0, this.type, this.line, this.column)
                break
            case Type.DOUBLE:
                env.saveVariable(this.id, 0.0, this.type, this.line, this.column)
                break

            case Type.BOOLEAN:
                env.saveVariable(this.id, true, this.type, this.line, this.column)
                break
            case Type.CHAR:
                env.saveVariable(this.id, '\u0000', this.type, this.line, this.column)
                break

            case Type.STRING:
                env.saveVariable(this.id, "", this.type, this.line, this.column)
                break

           }
        }
    }

    public ast() {
        const s = Singleton.getInstance()
        const nombreNodo = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${nombreNodo}[label="\\<Instruccion\\>\\nDeclaracion variable"];
        ${nombreNodo}2[label="\\<Tipo\\>\\n${Type[this.type]}"];
        ${nombreNodo}1[label="\\<Nombre\\>\\n${this.id}"];
        ${nombreNodo}->${nombreNodo}1
        ${nombreNodo}->${nombreNodo}2
        `)

        if (this.value){
            s.add_ast(`${nombreNodo}->${this.value.ast()}`)
        }
        else{
            
        }

    }

    


}