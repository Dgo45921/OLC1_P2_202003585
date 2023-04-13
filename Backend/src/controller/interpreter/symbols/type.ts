export enum Type{
    INT,         //0
    DOUBLE,         //1
    STRING,         //2
    BOOLEAN,        //3
    CHAR,           //4
    VECTOR,         //5
    LIST,           //6
    NULL,          //7
}


export type Return = {
    value:any,
    type:Type
}