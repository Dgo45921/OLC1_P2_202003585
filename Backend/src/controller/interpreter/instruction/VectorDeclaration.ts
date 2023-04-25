import { Instruction } from "../abstract/Instruction";
import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Type } from "../abstract/Type";
import { Error } from "../Error";
import { Singleton } from "../Singleton";


export class VectorDeclaration extends Instruction {
    private id: string
    private type1: Type
    private type2: Type
    private value: Expression | Object
    constructor(id: string, type: Type, type2: Type, value: Expression | Object, line: number, column: number) {
        super(line, column)
        this.id = id
        this.type1 = type
        this.type2 = type2
        this.value = value
    }


    public execute(env: Environment): any {
        const singleton = Singleton.getInstance()
        if (this.value != null) {

            // case when its not a list of values
            if (this.value instanceof Expression) {
                const valores = this.value.execute(env)
                if (this.type1 !== this.type2) {
                    console.log('error semantico declaracion de vector dos tipos distintos')
                }
                else {
                   
                    let new_vector = new Array(valores.value);

                    if (this.type1 === Type.INT) {
                        new_vector.fill(0)
                        env.saveVariable(this.id, new_vector, Type.VECTOR_INT, this.line, this.column)
                    }
                    else if (this.type1 === Type.DOUBLE) {
                        new_vector.fill(0.0)
                        env.saveVariable(this.id, new_vector, Type.VECTOR_DOUBLE, this.line, this.column)
                    }
                    else if (this.type1 === Type.CHAR) {
                        new_vector.fill("")
                        env.saveVariable(this.id, new_vector, Type.VECTOR_CHAR, this.line, this.column)
                    }

                    else if (this.type1 === Type.STRING) {
                        new_vector.fill("")
                        env.saveVariable(this.id, new_vector, Type.VECTOR_STRING, this.line, this.column)
                    }
                    else if (this.type1 === Type.BOOLEAN) {
                        new_vector.fill(true)
                        env.saveVariable(this.id, new_vector, Type.VECTOR_BOOLEAN, this.line, this.column)
                    }
                    else{
                        const consoleResponse = 'Error semántico: '+ `Vector:'${this.id}' tipo de inicializacion de vector no valida` + ' genere el reporte de errores para mas detalles'
                        singleton.appendConsole(consoleResponse)
                        throw singleton.addError(new Error("Semantico",`Vector:'${this.id}' tipos de inicializacion no coinciden, ${Type[this.type1]},  ${Type[this.type2]}`,this.line,this.column));
            
                    }


                    
                }
            }
            else {
                let new_vector = new Array();
                let arrayvalues = Object.values(this.value)
               

                for(let i = 0; i<arrayvalues.length;i++){

                    let val = arrayvalues[i].execute(env)
                    new_vector.push(val.value)
                
                }


                if (arrayvalues[0].execute(env).type === Type.INT) {

                    env.saveVariable(this.id, new_vector, Type.VECTOR_INT, this.line, this.column)
                }
                else if (arrayvalues[0].execute(env).type === Type.DOUBLE) {

                    env.saveVariable(this.id, new_vector, Type.VECTOR_DOUBLE, this.line, this.column)
                }
                else if (arrayvalues[0].execute(env).type === Type.CHAR) {

                    env.saveVariable(this.id, new_vector, Type.VECTOR_CHAR, this.line, this.column)
                }

                else if (arrayvalues[0].execute(env).type === Type.STRING) {

                    env.saveVariable(this.id, new_vector, Type.VECTOR_STRING, this.line, this.column)
                }
                else if (arrayvalues[0].execute(env).type === Type.BOOLEAN) {

                    env.saveVariable(this.id, new_vector, Type.VECTOR_BOOLEAN, this.line, this.column)
                }

            }



        }
    }



    public ast() {
        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nArray Declaracion"];
        ${name_node}1[label="\\<Nombre\\>\\n{${this.id}}"];
        ${name_node}2[label="\\<Tipo\\>\\n${this.type1}"];
        ${name_node}3[label="\\<Contenido\\>"];
        ${name_node}->${name_node}1;
        ${name_node}->${name_node}2;
        ${name_node}->${name_node}3;
        `)

       
    }

}
