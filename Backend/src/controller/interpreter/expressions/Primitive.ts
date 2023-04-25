import { Environment } from "../Enviroment";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Type";

export class Primitive extends Expression{
    constructor(
        line:number,
        column:number,
        private value:any,
        private type:Type


    ){
        super(line, column)
    }

    public execute(env:Environment):Return {
        switch(this.type){
            case Type.INT:
                return {value:parseInt(this.value), type: this.type}
            case Type.DOUBLE:
                return {value:parseFloat(this.value), type: this.type}
            case Type.CHAR:
                this.value = (this.value).replaceAll("'","");
                this.value = (this.value).replaceAll("\\n","\n");
                this.value = (this.value).replaceAll("\\t","\t");
                return { value: this.value, type: Type.CHAR }
            case Type.STRING:
                this.value = (this.value).replaceAll('"','');
                this.value = (this.value).replaceAll("\\n","\n");
                this.value = (this.value).replaceAll("\\t","\t");
                return { value: this.value, type: Type.STRING }
            case Type.BOOLEAN:
                return(this.value === 'true' ? { value: true, type: Type.BOOLEAN } : { value: false, type: Type.BOOLEAN })

            default:
                return { value: null    , type: Type.NULL}

        }
    }

    public ast() {

        const name = `node_${this.line}_${this.column}_`
        if (this.type == Type.STRING) return `
        ${name};
        ${name}[label="\\"${this.value.toString().replaceAll('"', "")}\\""];`

        else  if (this.type == Type.CHAR) return `
        ${name};
        ${name}[label="\\'${this.value.toString().replaceAll("'",'')}\\'"];`

        else return `
        ${name};
        ${name}[label="${this.value.toString()}"];`

    }
}

