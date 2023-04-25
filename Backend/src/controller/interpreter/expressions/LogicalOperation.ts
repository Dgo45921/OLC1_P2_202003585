import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";

export class LogicalOperation extends Expression {
    constructor(
        private leftExp:Expression,
        private rightExp:Expression,
        private sign:string,
        line:number,
        column:number
    ){
        super(line, column)
    }


    public execute(env:Environment): Return {
        let valueLeft = this.leftExp.execute(env)
        let valueRight = this.rightExp.execute(env)

        let response:Return =  { value: null, type: Type.NULL}

        if (valueLeft.type !== Type.BOOLEAN || valueRight.type !== Type.BOOLEAN) {
            console.log('error semantico, operacion con datos no booleanos')
            return response
        }

        switch(this.sign){
            case '!':
                response = {value: !valueLeft.value, type:Type.BOOLEAN}
                break
            case '&&':
                response = {value: valueLeft.value && valueRight.value, type:Type.BOOLEAN}
                break
            case '||':
                response = {value: valueLeft.value || valueRight.value, type:Type.BOOLEAN}
                break
            default:
                console.log('error semantico en operacion logica')
                return { value: 'error', type: Type.NULL}
                
        }



        return response
    }


    
    public ast() {

        if(this.sign === '!'){
            const node = `node_${this.line}logicnegation_${this.column}_`
            return `
            ${node};
            ${node}[label="-"];
            ${node}->${this.rightExp.ast()}  
            `

        }
        else if(this.sign === '&&'){
            const node = `node_${this.line}andlogical_${this.column}_`
            return `
            ${node};
            ${node}[label="*"];
            ${node}->${this.leftExp.ast()}
            ${node}->${this.rightExp.ast()}
            `
        }

        else if(this.sign === '||'){
            const node = `node_${this.line}orLogical_${this.column}_`
            return `
            ${node};
            ${node}[label="/"];
            ${node}->${this.leftExp.ast()}
            ${node}->${this.rightExp.ast()}
            `
        }
        else{
            
            const node = `node_${this.line}8_${this.column}_`
            return `
            ${node};
            ${node}[label="${this.sign}"];
            ${node}->${this.leftExp.ast()}
            ${node}->${this.rightExp.ast()}
            `
        
        }

           
        }

}