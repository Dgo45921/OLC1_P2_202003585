import { Error } from "./Error";

export class Singleton{
    private static instance: Singleton;
    private console:string="";
    private errors:Error[]=[];

    constructor(){}

    public reset(){
        this.errors=[];
        this.console="";
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

}