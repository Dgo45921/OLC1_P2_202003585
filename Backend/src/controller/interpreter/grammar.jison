%{
  // importar tipos
  const {Primitive} = require('./expressions/Primitive')
  const {Print} = require('./instruction/Print')
  const {Type} = require('./abstract/Type')

%}



/* Definición Léxica */
%lex

%options case-insensitive

%x string

%%

/* Whitespaces */
[\r|\f|\s|\t|\n]                   {}              // white spaces
\/\/.*                           {}              // oneLineComment
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]   {}           // multilineComment

// reserved words
"int"                 {console.log("Se encontró token con valor: " + yytext); return 'reserved_int';}
"true"                {console.log("Se encontró token con valor: " + yytext); return 'reserved_true';}
"false"               {console.log("Se encontró token con valor: " + yytext); return 'reserved_false';}
"double"              {console.log("Se encontró token con valor: " + yytext); return 'reserved_double';}
"boolean"             {console.log("Se encontró token con valor: " + yytext); return 'reserved_boolean';}
"char"                {console.log("Se encontró token con valor: " + yytext); return 'reserved_char';}
"string"              {console.log("Se encontró token con valor: " + yytext); return 'reserved_string';}
"list"                {console.log("Se encontró token con valor: " + yytext); return 'reserved_list';}
"add"                 {console.log("Se encontró token con valor: " + yytext); return 'reserved_add';}
"if"                  {console.log("Se encontró token con valor: " + yytext); return 'reserved_if';}
"else"                {console.log("Se encontró token con valor: " + yytext); return 'reserved_else';}
"print"               {console.log("Se encontró token print con valor: " + yytext); return 'reserved_print';}
"switch"              {console.log("Se encontró token con valor: " + yytext); return 'reserved_switch';}
"case"                {console.log("Se encontró token con valor: " + yytext); return 'reserved_case';}
"default"             {console.log("Se encontró token con valor: " + yytext); return 'reserved_default';}
"break"               {console.log("Se encontró token con valor: " + yytext); return 'reserved_break';}
"while"               {console.log("Se encontró token con valor: " + yytext); return 'reserved_while';}
"for"                 {console.log("Se encontró token con valor: " + yytext); return 'reserved_for';}
"do"                  {console.log("Se encontró token con valor: " + yytext); return 'reserved_do';}
"continue"            {console.log("Se encontró token con valor: " + yytext); return 'reserved_continue';}
"return"              {console.log("Se encontró token con valor: " + yytext); return 'reserved_return';}
"void"                {console.log("Se encontró token con valor: " + yytext); return 'reserved_void';}
"toLower"             {console.log("Se encontró token con valor: " + yytext); return 'reserved_toLower';}
"toUpper"             {console.log("Se encontró token con valor: " + yytext); return 'reserved_toUpper';}
"Length"              {console.log("Se encontró token con valor: " + yytext); return 'reserved_length';}
"Truncate"            {console.log("Se encontró token con valor: " + yytext); return 'reserved_truncate';}
"round"               {console.log("Se encontró token con valor: " + yytext); return 'reserved_round';}
"typeof"              {console.log("Se encontró token con valor: " + yytext); return 'reserved_typeof';}
"tostring"            {console.log("Se encontró token con valor: " + yytext); return 'reserved_tostring';}
"toCharArray"         {console.log("Se encontró token con valor: " + yytext); return 'reserved_toCharArray';}
"main"                {console.log("Se encontró token con valor: " + yytext); return 'reserved_main';}
"new"                 {console.log("Se encontró token con valor: " + yytext); return 'reserved_new';}

/*  regex   */

[a-zA-Z][a-zA-Z0-9_]*                                {console.log("Se encontró token id con valor: " + yytext); return 'identifier';}
[0-9]+"."[0-9]+                                      {console.log("Se encontró token con valor: " + yytext); return 'decimalNum';}
[0-9]+                                               {console.log("Se encontró token con valor: " + yytext); return 'integerNum';}
[\']([^']|"\\n"|"\\t"|(\\)(\\))?[\']                 {console.log("Se encontró token con valor: " + yytext); return 'charValue';}
[\"]("\\""\""|[^"])*[\"]                             {console.log("Se encontró token con valor: " + yytext); return 'stringValue';}



// reserved symbols
";"                 {console.log("Se encontró token con valor: " + yytext);     return ';';}
"+"                 {console.log("Se encontró token con valor: " + yytext);     return '+';}
"-"                 {console.log("Se encontró token con valor: " + yytext);     return '-';}
"++"                 {console.log("Se encontró token con valor: " + yytext);    return '++';}
"--"                 {console.log("Se encontró token con valor: " + yytext);    return '--';}
"*"                 {console.log("Se encontró token con valor: " + yytext);     return '*';}
"/"                 {console.log("Se encontró token con valor: " + yytext);     return '/';}
"^"                 {console.log("Se encontró token con valor: " + yytext);     return '^';}
"%"                 {console.log("Se encontró token con valor: " + yytext);     return '%';}
"="                 {console.log("Se encontró token con valor: " + yytext);     return '=';}
"=="                {console.log("Se encontró token con valor: " + yytext);     return '==';}
"!="                {console.log("Se encontró token con valor: " + yytext);     return '!=';}
"<"                 {console.log("Se encontró token con valor: " + yytext);     return '<';}
">"                 {console.log("Se encontró token con valor: " + yytext);     return '>';}
"<="                {console.log("Se encontró token con valor: " + yytext);     return '<=';}
">="                {console.log("Se encontró token con valor: " + yytext);     return '>=';}
"!"                 {console.log("Se encontró token con valor: " + yytext);     return '!';}
"?"                 {console.log("Se encontró token con valor: " + yytext);     return '?';}
":"                 {console.log("Se encontró token con valor: " + yytext);     return ':';}
"||"                {console.log("Se encontró token con valor: " + yytext);     return '||';}
"&&"                {console.log("Se encontró token con valor: " + yytext);     return '&&';}
"("                 {console.log("Se encontró token con valor: " + yytext);     return '(';}
")"                 {console.log("Se encontró token con valor: " + yytext);     return ')';}
"{"                 {console.log("Se encontró token con valor: " + yytext);     return '{';}
"}"                 {console.log("Se encontró token con valor: " + yytext);     return '}';}
","                 {console.log("Se encontró token con valor: " + yytext);     return ',';}
"["                 {console.log("Se encontró token con valor: " + yytext);     return '[';}
"]"                 {console.log("Se encontró token con valor: " + yytext);     return ']';}
"."                 {console.log("Se encontró token con valor: " + yytext);     return '.';}












<<EOF>>                 return 'EOF';

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);}
/lex





/*Operaciones logicas*/
%left '?'
%left '++' '--'
%left '^'
%left '||'
%left '&&'
%left '!=' '==' '==='
%left '>' '<' '<=' '>=' 

/*Operaciones numericas*/
%left '+' '-'
%left '*' '/' '%' 
%right negativo '!' '(' 





%start INICIO

%% /* Definición de la gramática */

INICIO
	: INSTRUCTIONS EOF {console.log('ya entre'); return $1;}
;


// reserved words for type of variables
TYPE:
reserved_char
|reserved_boolean
|reserved_int
|reserved_double
|reserved_string 
;


//=========================================================================================================================

// primitive values
OPERAND:  integerNum {$$ = new Primitive(@1.first_line,@1.first_column ,$1, Type.INT);}
        | decimalNum {$$ = new Primitive(@1.first_line,@1.first_column ,$1, Type.DOUBLE);}
        | charValue  {$$ = new Primitive(@1.first_line,@1.first_column ,$1, Type.CHAR);}
        | stringValue {$$ = new Primitive(@1.first_line,@1.first_column ,$1, Type.STRING);} 
        | reserved_false {$$ = new Primitive(@1.first_line,@1.first_column ,$1, Type.BOOLEAN);}
        | reserved_true  {$$ = new Primitive(@1.first_line,@1.first_column ,$1, Type.BOOLEAN);}
        ;

// =========================================================================================================================

// built-in functions

CAST: '(' TYPE ')' EXPRESSION  ;


LOWER_UPPER: reserved_toLower '(' EXPRESSION ')' 
            | reserved_toUpper '(' EXPRESSION ')'
        
;

LENGTH:reserved_length '(' EXPRESSION ')';

ROUND: reserved_round '(' EXPRESSION ')';

TO_STRING: reserved_tostring '(' EXPRESSION ')';

TO_CHAR_ARRAY: reserved_toCharArray '(' EXPRESSION ')';

TRUNCATE:reserved_truncate '(' EXPRESSION ')';

TYPE_OF:reserved_typeof '(' EXPRESSION ')';


// ============================================================================================================================

// statements
INCREASE: identifier '++' ';';

DECREASE: identifier '--' ';';



// ============================================================================================================================

// list of expressions

EXPRESSIONS: EXPRESSIONS ',' EXPRESSION
          |  EXPRESSION ;
            
EXPRESSION : OPERAND

    | EXPRESSION '+' EXPRESSION                     
    | EXPRESSION '-' EXPRESSION                     
    | EXPRESSION '*' EXPRESSION                     
    | EXPRESSION '/' EXPRESSION                     
    | '-' EXPRESSION %prec negativo  
    | '!' EXPRESION	      
    | '(' EXPRESSION ')'                     
    | EXPRESSION '=='  EXPRESSION                   
    | EXPRESSION '!='  EXPRESSION                   
    | EXPRESSION '<'   EXPRESSION                  
    | EXPRESSION '>'   EXPRESSION                  
    | EXPRESSION '<='  EXPRESSION                   
    | EXPRESSION '>='  EXPRESSION                   
    | EXPRESSION '&&'  EXPRESSION                  
    | EXPRESSION '||'  EXPRESSION                                                                    
    | CAST                                                                                                                                                  
    | LOWER_UPPER                                               
    | ROUND                                                     
    | LENGTH                                                    
    | TO_STRING                                                
    | TO_CHAR_ARRAY                                             
    | TRUNCATE                                                  
    | TYPE_OF     
    | VECTOR_ACCESS
    | LIST_ACCESS
    | FUNCTION_CALL
    | TERNARY                              
    | identifier
    ;         
// ====================================================================================================================================
// basic expressions



VECTOR_ACCESS: identifier '[' EXPRESSION ']'
               ;

LIST_ACCESS: identifier '[' '[' EXPRESSION ']' ']' ;



FUNCTION_CALL: identifier '(' EXPRESSIONS ')' 
                | identifier  '('')' 
;

TERNARY:	EXPRESSION '?' EXPRESSION ':' EXPRESSION 
;




// list of instructions

INSTRUCTIONS: INSTRUCTIONS INSTRUCTION {$1.push($2); $$=$1; console.log('entre a instrucciones');}
            | INSTRUCTION              {$$ = [$1]; console.log('entre a instruccion');}

;

INSTRUCTIONS2: INSTRUCTIONS2 INSTRUCTION2
            | INSTRUCTION2

;
 
INSTRUCTION: DECLARATION 
           | LIST_ADDITION
           | INCREASE
           | DECREASE
           | IF_STATEMENT
           | SWITCH_STATEMENT
           | FOR_STATEMENT
           | DO_WHILE_STATEMENT
           | FUNCTION_DECLARATION
           | FUNCTION_CALL2
           | PRINT {$$ = $1;}
           
;

INSTRUCTION2: DECLARATION 
           | LIST_ADDITION
           | INCREASE
           | DECREASE
           | IF_STATEMENT
           | SWITCH_STATEMENT
           | FOR_STATEMENT
           | DO_WHILE_STATEMENT
           | reserved_break ';'
           | reserved_continue ';'
           | RETURN_STATEMENT
           | FUNCTION_CALL2
           | PRINT {$$ = $1;}
           
;


PRINT : reserved_print '(' EXPRESSION ')' ';'  {$$ = new Print(@1.first_line,@1.first_column ,$3)} ;


RETURN_STATEMENT: reserved_return ';'
       | reserved_return EXPRESSION ';'

;

DECLARATION: VARIABLE_DECLARATION
           | VECTOR_DECLARATION
           | LIST_DECLARATION
;


VARIABLE_DECLARATION: TYPE identifier ';' 
                    | TYPE identifier '=' EXPRESSION ';'
                    ;

VARIABLE_ASIGNATION: identifier '=' OPERAND ';'
                     |identifier '=' identifier ';'
                   ;       

VECTOR_DECLARATION:TYPE '[' ']' identifier '=' reserved_new TYPE '[' EXPRESSION ']' ';' 
                   |TYPE '[' ']' identifier '=' '{' VALUE_LIST '}' ';'
                    ;


VALUE_LIST: VALUE_LIST ',' EXPRESSION
          |EXPRESSION
;


LIST_DECLARATION:reserved_list '<' TYPE '>' identifier '=' reserved_new reserved_list '<' TYPE '>' ';';

LIST_ADDITION:identifier '.' reserved_add '(' EXPRESSION ')' ';' ;


IF_STATEMENT: reserved_if '(' EXPRESSION ')' '{' INSTRUCTIONS2 '}'
            | reserved_if '(' EXPRESSION ')' '{' INSTRUCTIONS2 '}' reserved_else '{' INSTRUCTIONS2 '}'
            | reserved_if '(' EXPRESSION ')' '{' INSTRUCTIONS2 '}' ELSE_IF_STATEMENT
            | reserved_if '(' EXPRESSION ')' '{' INSTRUCTIONS2 '}' ELSE_IF_STATEMENT reserved_else '{' INSTRUCTIONS2 '}'
            ;

ELSE_IF_STATEMENT: ELSE_IF_STATEMENT reserved_else reserved_if '(' EXPRESSION ')' '{' INSTRUCTIONS2 '}'
                  | reserved_else reserved_if '(' EXPRESSION ')' '{' INSTRUCTIONS2 '}'
                  ;


SWITCH_STATEMENT: reserved_switch '(' EXPRESSION ')' '{' CASE_LIST '}'
                  | reserved_switch '(' EXPRESSION ')' '{' reserved_default ':' INSTRUCTIONS2 '}'
                  | reserved_switch '(' EXPRESSION ')' '{' CASE_LIST reserved_default ':' INSTRUCTIONS2 '}'
;

CASE_LIST: CASE_LIST reserved_case EXPRESSION ':' INSTRUCTIONS2
          | reserved_case EXPRESSION ':' INSTRUCTIONS2


 ;

 WHILE_STATEMENT:reserved_while '(' EXPRESSION ')' '{' INSTRUCTIONS2 '}';


 FOR_STATEMENT: reserved_for '(' FOR_FIRST_CONDITION EXPRESSION ';' ')' '{' INSTRUCTIONS2 '}'

 
              ;

FOR_FIRST_CONDITION:
                    VARIABLE_ASIGNATION
                    | VARIABLE_DECLARATION

;              

FOR_THIRD_CONDITION: EXPRESSION INCREASE
                    | EXPRESSION DECREASE
                    | identifier '=' EXPRESSION

                    ;


DO_WHILE_STATEMENT: reserved_do '{' INSTRUCTIONS2 '}' reserved_while '(' EXPRESSION ')' ';';                    


FUNCTION_DECLARATION: TYPE identifier '(' PARAMETERS ')' '{' INSTRUCTIONS2 '}'
                    | reserved_void identifier '(' PARAMETERS ')' '{' INSTRUCTIONS2 '}'                    
                    

;

PARAMETERS:
           PARAMETERS ',' TYPE identifier
          |TYPE identifier
          
;