export enum Type {
    INT,            //0
    DOUBLE,         //1
    STRING,         //2
    BOOLEAN,        //3
    CHAR,           //4
    NULL,           //5
    LIST,           //6
    VECTOR_INT,          //7
    VECTOR_DOUBLE,
    VECTOR_CHAR,
    VECTOR_STRING,
    VECTOR_BOOLEAN,
    VECTOR,
    LIST_INT,          //7
    LIST_DOUBLE,
    LIST_CHAR,
    LIST_STRING,
    LIST_BOOLEAN,
}


export type Return = {
    value: any,
    type: Type
}