import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";


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

    

    public execute(): Return {
        let valueLeft = this.leftExp.execute()
        let valueRight = this.rightExp.execute()
        switch (this.sign){
            case 'negation':
                if (valueLeft.type===Type.INT || valueLeft.type === Type.DOUBLE){
                    if (valueLeft.type===Type.INT){
                        return { value: valueLeft.value*(-1), type: Type.INT}
                    }
                    else if (valueLeft.type===Type.DOUBLE){
                        return { value: valueLeft.value*(-1), type: Type.DOUBLE}
                    }
                    else{
                        console.log('este seria un error semantico al negar cualquier cosa que no sea numerica')
                    }

                   
                }
                break;

            case 'plus':
                // case where the left expression is an integer
                if(valueLeft.type === Type.INT){
                    if(valueRight.type === Type.INT){
                        return { value: valueLeft.value+valueRight.value, type: Type.INT}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: parseFloat(valueLeft.value+valueRight.value), type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        let result = valueRight.value
                        if(result === true){
                            return { value: valueLeft.value+1, type: Type.INT}

                        }
                        else{
                            return { value: valueLeft.value, type: Type.INT}
                        }

                        
                    }
                    else if(valueRight.type === Type.CHAR){
                        return { value: valueLeft.value, type: Type.INT}
                    }
                    else if(valueRight.type === Type.STRING){
                        return { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                    }
                    else{
                        console.log('error semantico, no se pudo sumar int y null')
                    }


                }

                else if(valueLeft.type === Type.DOUBLE){
                    if(valueRight.type === Type.INT){
                        return { value: parseFloat(valueLeft.value+valueRight.value), type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: valueLeft.value+valueRight.value, type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        let result = valueRight.value
                        if(result === true){
                            return { value: parseFloat(valueLeft.value+1), type: Type.DOUBLE}

                        }
                        else{
                            return { value: parseFloat(valueLeft.value) , type: Type.DOUBLE}
                        }
                    }
                    else if(valueRight.type === Type.CHAR){
                        return { value: valueLeft.value, type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.STRING){
                        return { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                    }
                    else{
                        console.log('error semantico, no se pudo sumar double y null')
                    }



                }

                else if(valueLeft.type === Type.BOOLEAN){
                    if(valueRight.type === Type.INT){
                        return { value: valueRight.value, type: Type.INT}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: valueRight.value, type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        console.log('error semantico, no se pudo sumar boolean y boolean')
                        return { value: 'null', type: Type.NULL}
                    }
                    else if(valueRight.type === Type.CHAR){
                        console.log('error semantico, no se pudo sumar boolean y char')
                        return { value: 'null', type: Type.NULL}
                    }
                    else if(valueRight.type === Type.STRING){
                        return { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                    }
                    else{
                        console.log('error semantico, no se pudo sumar boolean y null')
                    }



                }
                

                else if(valueLeft.type === Type.CHAR){
                    if(valueRight.type === Type.INT){
                        return { value: valueRight.value, type: Type.INT}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: valueRight.value, type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        console.log('error semantico, no se pudo sumar char y boolean')
                        return { value: 'null', type: Type.NULL}
                    }
                    else if(valueRight.type === Type.CHAR){
                        return { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                    }
                    else if(valueRight.type === Type.STRING){
                        return { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                    }
                    else{
                        console.log('error semantico, no se pudo sumar char y null')
                        return { value: 'null', type: Type.NULL}
                    }



                }

                else if(valueLeft.type === Type.STRING){
                    if(valueRight.type === Type.INT){
                        return { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        return { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                    }
                    else if(valueRight.type === Type.CHAR){
                        return { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                    }
                    else if(valueRight.type === Type.STRING){
                        return { value: valueLeft.value.toString() + valueRight.value.toString() , type: Type.STRING}
                    }
                    else{
                        console.log('error semantico, no se pudo sumar char y null')
                    }



                }
                else{
                    console.log('error semantico sumando null con algo mas')
                    return { value: 'null', type: Type.NULL}
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
                        return { value: 'null', type: Type.NULL}
                    }


                }

                else if(valueLeft.type === Type.DOUBLE){
                    if(valueRight.type === Type.INT){
                        return { value: parseFloat(valueLeft.value)-parseFloat(valueRight.value), type: Type.DOUBLE}
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
                        return { value: valueLeft.value, type: Type.DOUBLE}
                    }
                    else{
                        console.log('error semantico, no se pudo restar double con algo mas')
                        return { value: 'null', type: Type.NULL}
                    }



                }

                else if(valueLeft.type === Type.BOOLEAN){
                    if(valueRight.type === Type.INT){
                        return { value: valueRight.value, type: Type.INT}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: valueRight.value, type: Type.DOUBLE}
                    }
                    
                    else{
                        console.log('error semantico, no se pudo sumar boolean y null')
                        return { value: 'null', type: Type.NULL}
                    }



                }
                

                else if(valueLeft.type === Type.CHAR){
                    if(valueRight.type === Type.INT){
                        return { value: valueRight.value, type: Type.INT}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: valueRight.value, type: Type.DOUBLE}
                    }
                    else{
                        console.log('error semantico, no se pudo sumar char y null')
                        return { value: 'null', type: Type.NULL}
                    }



                }

                else if(valueLeft.type === Type.STRING){
                   
                    console.log('error semantico, no se le puede restar nada a string')
                    return { value: 'null', type: Type.NULL}

                }

                break;

            case 'multiply':

              // case where the left expression is an integer
                if(valueLeft.type === Type.INT){
                    if(valueRight.type === Type.INT){
                        return { value: valueLeft.value*valueRight.value, type: Type.INT}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: parseFloat(valueLeft.value)*parseFloat(valueRight.value), type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        console.log('error semantico multiplicando int con boolean')
                        return { value: 'null', type: Type.NULL}

                        
                    }
                    else if(valueRight.type === Type.CHAR){
                        return { value: valueLeft.value, type: Type.INT}
                    }
                    else if(valueRight.type === Type.STRING){
                        console.log('error semantico multiplicando int con string')
                        return { value: 'null', type: Type.NULL}
                    }
                    else{
                        console.log('error semantico multiplicando int con null')
                        return { value: 'null', type: Type.NULL}
                    }


                }

                else if(valueLeft.type === Type.DOUBLE){
                    if(valueRight.type === Type.INT){
                        return { value: parseFloat(valueLeft.value)*parseFloat(valueRight.value), type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: parseFloat(valueLeft.value)*parseFloat(valueRight.value), type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        console.log('error semantico multiplicando double con boolean')
                        return { value: 'null', type: Type.NULL}
                    }
                    else if(valueRight.type === Type.CHAR){
                        return { value: valueLeft.value, type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.STRING){
                        console.log('error semantico multiplicando double con string')
                        return { value: 'null', type: Type.NULL}
                    }
                    else{
                        console.log('error semantico, no se pudo multiplicar double con null')
                    }



                }

                else if(valueLeft.type === Type.BOOLEAN){
                    console.log('error semantico multiplicando bool')
                    return { value: 'null', type: Type.NULL}

                }
                

                else if(valueLeft.type === Type.CHAR){
                    if(valueRight.type === Type.INT){
                        return { value: valueRight.value, type: Type.INT}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: valueRight.value, type: Type.DOUBLE}
                    }
                   
                    else{
                        console.log('error semantico, no se pudo multiplicar char con algo mas que no sea int o double')
                        return { value: 'null', type: Type.NULL}
                    }



                }

                else if(valueLeft.type === Type.STRING){
                    console.log('error semantico multiplicando string no valida')
                    return { value: 'null', type: Type.NULL}
                }
                
                break;
            
            case 'division':

              // case where the left expression is an integer
                if(valueLeft.type === Type.INT){
                    if(valueRight.type === Type.INT){
                        return { value: parseFloat(valueLeft.value)/parseFloat(valueRight.value), type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: parseFloat(valueLeft.value)/parseFloat(valueRight.value), type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.BOOLEAN){
                        console.log('error semantico dividiendo int con boolean')
                        return { value: 'null', type: Type.NULL}

                        
                    }
                    else if(valueRight.type === Type.CHAR){
                        return { value: valueLeft.value, type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.STRING){
                        console.log('error semantico dividiendo int con string')
                        return { value: 'null', type: Type.NULL}
                    }
                    else{
                        console.log('error semantico dividiendo int con null')
                        return { value: 'null', type: Type.NULL}
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
                        return { value: Math.pow(valueLeft.value, valueRight.value), type: Type.INT}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: Math.pow(parseFloat(valueLeft.value), parseFloat(valueRight.value)), type: Type.DOUBLE}
                    }
                   
                    else{
                        console.log('error semantico elevando int a tipo no valido')
                        return { value: 'null', type: Type.NULL}
                    }


                }

                else if(valueLeft.type === Type.DOUBLE){
                    if(valueRight.type === Type.INT){
                        return { value: Math.pow(parseFloat(valueLeft.value), parseFloat(valueRight.value)), type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: Math.pow(parseFloat(valueLeft.value), parseFloat(valueRight.value)), type: Type.DOUBLE}

                    }
                    
                    else{
                        console.log('error semantico elevando int a tipo no valido')
                        return { value: 'null', type: Type.NULL}
                    }



                }
                
                else{
                    console.log('error semantico elevando tipo invalido')
                    return { value: 'null', type: Type.NULL} }

                break;


            case 'module':
                 // case where the left expression is an integer
                 if(valueLeft.type === Type.INT){
                    if(valueRight.type === Type.INT){
                        return { value:valueLeft.value % valueRight.value, type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value: parseFloat(valueLeft.value) % parseFloat(valueRight.value), type: Type.DOUBLE}
                    }
                   
                    else{
                        console.log('error semantico sacando modulo a tipo no valido')
                        return { value: 'null', type: Type.NULL}
                    }


                }

                else if(valueLeft.type === Type.DOUBLE){
                    if(valueRight.type === Type.INT){
                        return { value:valueLeft.value % valueRight.value, type: Type.DOUBLE}
                    }
                    else if(valueRight.type === Type.DOUBLE){
                        return { value:valueLeft.value % valueRight.value, type: Type.DOUBLE}

                    }
                    
                    else{
                        console.log('error semantico sacando modulo a tipo no valido')
                        return { value: 'null', type: Type.NULL}
                    }



                }
                
                else{
                    console.log('error semantico elevando tipo invalido')
                    return { value: 'null', type: Type.NULL} }

                break;



        }

        return { value: 'error', type: Type.NULL}
    }

}

