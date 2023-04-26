import { Error } from "./Error";
import { Symbol } from "./Symbol";
import { Type } from "./abstract/Type";
import { FunctionDeclaration } from "./instruction/FunctionDeclaration";

export class Singleton{
    private static instance: Singleton;
    private console:string="";
    private errors:Error[]=[];
    public symboltableDot = ''
    public astViz = ''

    public variables: Map<string, Symbol> = new Map();
    public method_symbolTable: Map<string, any> = new Map();

    constructor(){}

    public reset(){
        this.errors=[];
        this.console="";
        this.symboltableDot = ''
        this.astViz = ''
        this.variables.clear()
        this.method_symbolTable.clear()
    }

    public static getInstance():Singleton{
        if(!Singleton.instance){
            Singleton.instance=new Singleton();
        }
        return Singleton.instance;
    }

    public appendConsole(data: string){
        this.console+=data;
    }

    public getConsola():string{
        return this.console;
    }

    public addError(data: Error){
        this.errors.push(data);
    }

    public getErrors():Error[]{
        return this.errors;
    }

    public getErrorsViz():string{
        let dotCode = `digraph G {
            rankdir=LR
            node [shape=none fontname=Helvetica]
        
            A [label=<
              <TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
               <TR>
        <TD BGCOLOR="#ff6363">Tipo</TD>
        <TD BGCOLOR="#ff6363">Descripcion</TD>
        <TD BGCOLOR="#ff6363">Linea</TD>
        <TD BGCOLOR="#ff6363">Columna</TD>
        </TR>`

        for(let i = 0; i<this.errors.length ; i++){
            dotCode += `<TR>\n`            
            dotCode += `<TD>${this.errors[i].type}</TD>\n`
            dotCode += `<TD>${this.errors[i].description}</TD>\n`
            dotCode += `<TD>${this.errors[i].line}</TD>\n`
            dotCode += `<TD>${this.errors[i].column}</TD>\n`
            dotCode += `</TR>\n`
        }

        dotCode += `</TABLE>
        >];
    }`


        return dotCode
    }


    public getST():string{
        this.symboltableDot = `digraph G {
            rankdir=LR
            node [shape=none fontname=Helvetica]
        
            A [label=<
              <TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
               <TR>
        <TD BGCOLOR="#ff6363" colspan="5">Funciones y metodos</TD>
        </TR>
        <TR>
        <TD BGCOLOR="#ff6363">Identificador</TD>
        <TD BGCOLOR="#ff6363">Tipo</TD>
        <TD BGCOLOR="#ff6363">Entorno</TD>
        <TD BGCOLOR="#ff6363">Linea</TD>
        <TD BGCOLOR="#ff6363">Columna</TD>
        
        </TR>`

        


      

        for (let [key, value] of this.method_symbolTable) {
            this.symboltableDot += `<TR>\n`            
            this.symboltableDot += `<TD>${value.id}</TD>\n`
            if(value instanceof FunctionDeclaration){
                this.symboltableDot += `<TD>Funcion</TD>\n`
            }
            else{
                this.symboltableDot += `<TD>Metodo</TD>\n`
            }
            this.symboltableDot += `<TD>Global</TD>\n`
            this.symboltableDot += `<TD>${value.line}</TD>\n`
            this.symboltableDot += `<TD>${value.column}</TD>\n`
            
  
            this.symboltableDot += `</TR>\n`
            }


        this.symboltableDot += `
        <TR>
        <TD BGCOLOR="#ff6363" colspan="5">Variables</TD>
        </TR>
        <TR>
        <TD BGCOLOR="#ff6363">Identificador</TD>
        <TD BGCOLOR="#ff6363">Tipo</TD>
        <TD BGCOLOR="#ff6363">Entorno</TD>
        <TD BGCOLOR="#ff6363">Linea</TD>
        <TD BGCOLOR="#ff6363">Columna</TD>
        </TR>
        `

        for (let [key, value] of this.variables) {
            this.symboltableDot += `<TR>\n`            
            this.symboltableDot += `<TD >${value.id}</TD>\n`
            this.symboltableDot += `<TD >${Type[value.type]}</TD>\n`
            this.symboltableDot += `<TD >${value.scope}</TD>\n`
            this.symboltableDot += `<TD >${value.line}</TD>\n`
            this.symboltableDot += `<TD >${value.column}</TD>\n`
  
            this.symboltableDot += `</TR>\n`
            }
            


        this.symboltableDot += `</TABLE>
        >];
    }`


        return this.symboltableDot
    }



    public add_ast(value:string){
        this.astViz  += value
    }


    

}