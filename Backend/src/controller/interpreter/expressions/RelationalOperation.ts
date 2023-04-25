import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";

export class RelationalOperation extends Expression {
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
        let response:Return =  { value: 'error', type: Type.NULL}
        let valueLeft = this.leftExp.execute(env)
        let valueRight = this.rightExp.execute(env)

        if (valueLeft.type === Type.NULL || valueRight.type === Type.NULL) {
            console.log('error semantico, operacion relacional con null')
            return response
        }

        switch(this.sign){
            case '==':
                response = {value: valueLeft.value == valueRight.value, type:Type.BOOLEAN}
                break
            case'!=':
                response = {value: valueLeft.value != valueRight.value, type:Type.BOOLEAN}
                break
            case'<':
                response = {value: valueLeft.value < valueRight.value, type:Type.BOOLEAN}
                break
            case'>':
                response = {value: valueLeft.value > valueRight.value, type:Type.BOOLEAN}
                break
            case'<=':
                response = {value: valueLeft.value <= valueRight.value, type:Type.BOOLEAN}
                break
            case'>=':
                response = {value: valueLeft.value >= valueRight.value, type:Type.BOOLEAN}
                break
            
            default:
                console.log('error semantico relational ....')
                return { value: 'error', type: Type.NULL}
                

        }


        return response
    }

    public ast() {

        if(this.sign === '!='){
            const node = `node_${this.line}distinto_${this.column}_`
            return `
            ${node};
            ${node}[label="-"];
            ${node}->${this.rightExp.ast()}  
            `

        }
        else if(this.sign === '=='){
            const node = `node_${this.line}igualigual_${this.column}_`
            return `
            ${node};
            ${node}[label="*"];
            ${node}->${this.leftExp.ast()}
            ${node}->${this.rightExp.ast()}
            `
        }

        else if(this.sign === '<'){
            const node = `node_${this.line}menorque_${this.column}_`
            return `
            ${node};
            ${node}[label="/"];
            ${node}->${this.leftExp.ast()}
            ${node}->${this.rightExp.ast()}
            `
        }
        else if(this.sign === '>'){
            const node = `node_${this.line}mayorque_${this.column}_`
            return `
            ${node};
            ${node}[label="+"];
            ${node}->${this.leftExp.ast()}
            ${node}->${this.rightExp.ast()}
            `
        }
        else if(this.sign === '>='){
            const node = `node_${this.line}mayorigual_${this.column}_`
            return `
            ${node};
            ${node}[label="${this.sign}"];
            ${node}->${this.leftExp.ast()}
            ${node}->${this.rightExp.ast()}
            `
        }
        else if(this.sign === '<='){
            const node = `node_${this.line}menorigual${this.column}_`
            return `
            ${node};
            ${node}[label="${this.sign}"];
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