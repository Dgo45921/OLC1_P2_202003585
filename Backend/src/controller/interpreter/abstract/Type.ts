export enum Type{
    INT,         //0
    DOUBLE,         //1
    STRING,         //2
    BOOLEAN,        //3
    CHAR,           //4
    NULL,          //5
}


export type Return = {
    value:any,
    type:Type
}