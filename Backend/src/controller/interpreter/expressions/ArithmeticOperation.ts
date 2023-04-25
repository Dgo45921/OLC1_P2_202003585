import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";
import { Error } from "../Error";



export class ArithmeticOperation extends Expression {
    
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

        if (valueLeft.type === Type.NULL || valueRight.type === Type.NULL) {
            console.log('error semantico, operacion con null')
            
            return response
        }


        switch (this.sign){
            case 'negation':
                if (valueLeft.type===Type.INT || valueLeft.type === Type.DOUBLE){
                    if (valueLeft.type===Type.INT){
                        response = { value: valueLeft.value*(-1), type: Type.INT}
                        break 
                    }
                    else if (valueLeft.type===Type.DOUBLE){
                        response = { value: valueLeft.value*(-1), type: Type.DOUBLE}
                        break 
                    }
                    else{
                        console.log('este seria un error semantico al negar cualquier cosa que no sea numerica')
                        break 
                    }

                   
                }
                break;

            case 'plus':
                // case where the left expression is an integer
                if(valueLeft.type === Type.INT){
                    if(valueRight.type === Type.INT){
                        response = { value: valueLeft.value+valueRight.value, type: Type.INT}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response = { value: parseFloat(valueLeft.value+valueRight.value), type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        let result = valueRight.value
                        if(result === true){
                            response = { value: valueLeft.value+1, type: Type.INT}
                            break

                        }
                        else{
                            response = { value: valueLeft.value, type: Type.INT}
                            break
                        }

                        
                    }
                    else if(valueRight.type === Type.CHAR){
                        response = { value: valueLeft.value, type: Type.INT}
                        break
                    }
                    else if(valueRight.type === Type.STRING){
                        response = { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                        break
                    }
                    else{
                        console.log('error semantico, no se pudo sumar int y null')
                        break
                    }


                }

                else if(valueLeft.type === Type.DOUBLE){
                    if(valueRight.type === Type.INT){
                        response = { value: parseFloat(valueLeft.value+valueRight.value), type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response = { value: valueLeft.value+valueRight.value, type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        let result = valueRight.value
                        if(result === true){
                            response = { value: parseFloat(valueLeft.value+1), type: Type.DOUBLE}
                            break

                        }
                        else{
                            response = { value: parseFloat(valueLeft.value) , type: Type.DOUBLE}
                            break
                        }
                    }
                    else if(valueRight.type === Type.CHAR){
                        response = { value: valueLeft.value, type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.STRING){
                        response = { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                        break
                    }
                    else{
                        console.log('error semantico, no se pudo sumar double y null')
                        break
                    }



                }

                else if(valueLeft.type === Type.BOOLEAN){
                    if(valueRight.type === Type.INT){
                        if (valueLeft.value === false){
                            response = { value: valueRight.value, type: Type.INT}
                        }
                        else{
                            response = { value: 1+valueRight.value, type: Type.INT}
                        }
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        if (valueLeft.value === false){
                            response = { value: valueRight.value, type: Type.DOUBLE}
                        }
                        else{
                            response = { value: 1-valueRight.value, type: Type.DOUBLE}
                        }
                        break
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        console.log('error semantico, no se pudo sumar boolean y boolean')
                        break
                    }
                    else if(valueRight.type === Type.CHAR){
                        console.log('error semantico, no se pudo sumar boolean y char')
                        break
                    }
                    else if(valueRight.type === Type.STRING){
                        response = { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                        break
                    }
                    else{
                        console.log('error semantico, no se pudo sumar boolean y null')
                        break
                    }



                }
                

                else if(valueLeft.type === Type.CHAR){
                    if(valueRight.type === Type.INT){
                        response = { value: valueRight.value, type: Type.INT}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response = { value: valueRight.value, type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        console.log('error semantico, no se pudo sumar char y boolean')
                        break
                    }
                    else if(valueRight.type === Type.CHAR){
                        response = { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                        break
                    }
                    else if(valueRight.type === Type.STRING){
                        response = { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                        break
                    }
                    else{
                        console.log('error semantico, no se pudo sumar char y null')
                        break
                    }



                }

                else if(valueLeft.type === Type.STRING){
                    if(valueRight.type === Type.INT){
                        response = { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response = { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                        break
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        response = { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                        break
                    }
                    else if(valueRight.type === Type.CHAR){
                        response = { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                        break
                    }
                    else if(valueRight.type === Type.STRING){
                        response = { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                        break
                    }
                    else{
                        console.log('error semantico, no se pudo sumar char y null')
                        break

                    }



                }
                else{
                    console.log('error semantico sumando null con algo mas')
                    break
                }

                break;

            case 'minus':
                // case where the left expression is an integer
                if(valueLeft.type === Type.INT){
                    if(valueRight.type === Type.INT){
                        return { value: valueLeft.value-valueRight.value, type: Type.INT}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: parseFloat(valueLeft.value)-parseFloat(valueRight.value), type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        let result = valueRight.value
                        if(result === true){
                            return { value: parseFloat(valueLeft.value) -1, type: Type.DOUBLE}

                        }
                        else{
                            return { value: parseFloat(valueLeft.value), type: Type.DOUBLE}
                        }
                    }
                    else if(valueRight.type === Type.CHAR){
                        return { value: valueLeft.value, type: Type.INT}
                    }
                    else{
                        console.log('error semantico, no se pudo restar int con algo mas')
                        break
                    }


                }

                else if(valueLeft.type === Type.DOUBLE){
                    if(valueRight.type === Type.INT){
                        response = { value: parseFloat(valueLeft.value)-parseFloat(valueRight.value), type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response = { value: parseFloat(valueLeft.value)-parseFloat(valueRight.value), type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        let result = valueRight.value
                        if(result === true){
                            response = { value: parseFloat(valueLeft.value) -1, type: Type.DOUBLE}
                            break

                        }
                        else{
                            response = { value: parseFloat(valueLeft.value), type: Type.DOUBLE}
                            break
                        }
                    }
                    else if(valueRight.type === Type.CHAR){
                        response = { value: valueLeft.value, type: Type.DOUBLE}
                        break
                    }
                    else{
                        console.log('error semantico, no se pudo restar double con algo mas')
                        break
                    }



                }

                else if(valueLeft.type === Type.BOOLEAN){
                    if(valueRight.type === Type.INT){
                        if (valueLeft.value === false){
                            response = { value: 0-valueRight.value, type: Type.INT}
                        }
                        else{
                            response = { value: 1-valueRight.value, type: Type.INT}
                        }

                        
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        if (valueLeft.value === false){
                            response = { value: 0-valueRight.value, type: Type.DOUBLE}
                        }
                        else{
                            response = { value: 1-valueRight.value, type: Type.DOUBLE}
                        }
                        break
                    }
                    
                    else{
                        console.log('error semantico, no se pudo sumar boolean y null')
                        break
                    }



                }
                

                else if(valueLeft.type === Type.CHAR){
                    if(valueRight.type === Type.INT){

                        response  = { value: 0-valueRight.value, type: Type.INT}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response  = { value: 0-valueRight.value, type: Type.DOUBLE}
                        break
                    }
                    else{
                        console.log('error semantico, no se pudo sumar char y null')
                        break
                    }



                }

                else if(valueLeft.type === Type.STRING){
                   
                    console.log('error semantico, no se le puede restar nada a string')
                    break

                }

                break;

            case 'multiply':

              // case where the left expression is an integer
                if(valueLeft.type === Type.INT){
                    if(valueRight.type === Type.INT){
                        response = { value: valueLeft.value*valueRight.value, type: Type.INT}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response = { value: parseFloat(valueLeft.value)*parseFloat(valueRight.value), type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        console.log('error semantico multiplicando int con boolean')

                        break

                        
                    }
                    else if(valueRight.type === Type.CHAR){
                        response = { value: valueLeft.value, type: Type.INT}
                        break
                    }
                    else if(valueRight.type === Type.STRING){
                        console.log('error semantico multiplicando int con string')

                        break
                    }
                    else{
                        console.log('error semantico multiplicando int con null')
                        break
                    }


                }

                else if(valueLeft.type === Type.DOUBLE){
                    if(valueRight.type === Type.INT){
                        response = { value: parseFloat(valueLeft.value)*parseFloat(valueRight.value), type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response = { value: parseFloat(valueLeft.value)*parseFloat(valueRight.value), type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        console.log('error semantico multiplicando double con boolean')
                        break
                    }
                    else if(valueRight.type === Type.CHAR){
                        response = { value: valueLeft.value, type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.STRING){
                        console.log('error semantico multiplicando double con string')
                        break
                    }
                    else{
                        console.log('error semantico, no se pudo multiplicar double con null')
                        break
                    }



                }

                else if(valueLeft.type === Type.BOOLEAN){
                    console.log('error semantico multiplicando bool')
                    break
                }
                

                else if(valueLeft.type === Type.CHAR){
                    if(valueRight.type === Type.INT){
                        response = { value: valueRight.value, type: Type.INT}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response = { value: valueRight.value, type: Type.DOUBLE}
                        break
                    }
                   
                    else{
                        console.log('error semantico, no se pudo multiplicar char con algo mas que no sea int o double')
                        break
                    }



                }

                else if(valueLeft.type === Type.STRING){
                    console.log('error semantico multiplicando string no valida')
                    break;
                }
                
                break;
            
            case 'division':

              // case where the left expression is an integer
                if(valueLeft.type === Type.INT){
                    if(valueRight.type === Type.INT){
                        response = { value: parseFloat(valueLeft.value)/parseFloat(valueRight.value), type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response = { value: parseFloat(valueLeft.value)/parseFloat(valueRight.value), type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        console.log('error semantico dividiendo int con boolean')
                        break

                        
                    }
                    else if(valueRight.type === Type.CHAR){
                        response = { value: valueLeft.value, type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.STRING){
                        console.log('error semantico dividiendo int con string')

                        break
                    }
                    else{
                        console.log('error semantico dividiendo int con null')

                        break
                    }


                }

                else if(valueLeft.type === Type.DOUBLE){
                    if(valueRight.type === Type.INT){
                        return { value: parseFloat(valueLeft.value)/parseFloat(valueRight.value), type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: parseFloat(valueLeft.value)/parseFloat(valueRight.value), type: Type.DOUBLE}

                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        console.log('error semantico dividiendo double con boolean')
                        return { value: 'null', type: Type.NULL}
                    }
                    else if(valueRight.type === Type.CHAR){
                        return { value: valueLeft.value, type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.STRING){
                        console.log('error semantico dividiendo double con string')
                        return { value: 'null', type: Type.NULL}
                    }
                    else{
                        console.log('error semantico, no se pudo multiplicar double con null')
                    }



                }

                else if(valueLeft.type === Type.BOOLEAN){
                    console.log('error semantico dividiendo bool')
                    return { value: 'null', type: Type.NULL}

                }
                

                else if(valueLeft.type === Type.CHAR){
                    if(valueRight.type === Type.INT){
                        return { value: parseFloat(valueRight.value), type: Type.DOUBLE}

                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: parseFloat(valueRight.value), type: Type.DOUBLE}
                    }
                   
                    else{
                        console.log('error semantico, no se pudo multiplicar char con algo mas que no sea int o double')
                        return { value: 'null', type: Type.NULL}
                    }



                }

                else if(valueLeft.type === Type.STRING){
                    console.log('error semantico dividiendo string no valida')
                    return { value: 'null', type: Type.NULL}
                }
                
                break;
            
            case 'power':
                // case where the left expression is an integer
                if(valueLeft.type === Type.INT){
                    if(valueRight.type === Type.INT){
                        response = { value: Math.pow(valueLeft.value, valueRight.value), type: Type.INT}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response = { value: Math.pow(parseFloat(valueLeft.value), parseFloat(valueRight.value)), type: Type.DOUBLE}
                        break
                    }
                   
                    else{
                        console.log('error semantico elevando int a tipo no valido')
                        break
                    }


                }

                else if(valueLeft.type === Type.DOUBLE){
                    if(valueRight.type === Type.INT){
                        response = { value: Math.pow(parseFloat(valueLeft.value), parseFloat(valueRight.value)), type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response = { value: Math.pow(parseFloat(valueLeft.value), parseFloat(valueRight.value)), type: Type.DOUBLE}
                        break

                    }
                    
                    else{
                        console.log('error semantico elevando int a tipo no valido')
                        response = { value: 'null', type: Type.NULL}
                        break
                    }



                }
                
                else{
                    console.log('error semantico elevando tipo invalido')
                    response = { value: 'null', type: Type.NULL}
                    break }
                    
                

                break;


            case 'module':
                 // case where the left expression is an integer
                 if(valueLeft.type === Type.INT){
                    if(valueRight.type === Type.INT){
                        response = { value:valueLeft.value % valueRight.value, type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response = { value: parseFloat(valueLeft.value) % parseFloat(valueRight.value), type: Type.DOUBLE}
                        break
                    }
                   
                    else{
                        console.log('error semantico sacando modulo a tipo no valido')
                        break
                    }


                }

                else if(valueLeft.type === Type.DOUBLE){
                    if(valueRight.type === Type.INT){
                        response = { value:valueLeft.value % valueRight.value, type: Type.DOUBLE}
                        break
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        response = { value:valueLeft.value % valueRight.value, type: Type.DOUBLE}
                        break

                    }
                    
                    else{
                        console.log('error semantico sacando modulo a tipo no valido')
                        break
                    }



                }
                
                else{
                    console.log('error semantico elevando tipo invalido')
                    break

                break;



        }

        
    }
    return response

        } 


    public ast() {

            const node = `node_${this.line}_${this.column}_`
            return `
            ${node};
            ${node}[label="${this.sign}"];
            ${node}->${this.leftExp.ast()}
            ${node}->${this.rightExp.ast()}
            `
        }
}

