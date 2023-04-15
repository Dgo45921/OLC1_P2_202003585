import { Error } from "./Error";

export class Singleton{
    private static instance: Singleton;
    private console:string="";
    private errores:Error[]=[];

    constructor(){}

    public reset(){
        this.errores=[];
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
        this.errores.push(data);
    }

    public getErrors():Error[]{
        return this.errores;
    }

}