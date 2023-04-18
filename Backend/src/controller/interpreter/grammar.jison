%{
  // importar tipos
  const {Primitive} = require('./expressions/Primitive')
  const {ArithmeticOperation} = require('./expressions/ArithmeticOperation')
  const {RelationalOperation} = require('./expressions/RelationalOperation')
  const {LogicalOperation} = require('./expressions/LogicalOperation')
  const {VariableAccess} = require('./expressions/VariableAccess')
  const {VectorAccess} = require('./expressions/VectorAccess')
  const {Ternary} = require('./expressions/Ternary')
  const {TypeOf} = require('./expressions/TypeOf')
  const {Cast} = require('./expressions/Cast')
  const {ToUpper} = require('./expressions/ToUpper')
  const {ToString} = require('./expressions/ToString')
  const {Round} = require('./expressions/Round')
  const {Truncate} = require('./expressions/Truncate')
  const {Print} = require('./instruction/Print')
  const {VectorDeclaration} = require('./instruction/VectorDeclaration')
  const {ToLower} = require('./expressions/ToLower')
  const {VariableDeclaration} = require('./instruction/VariableDeclaration')
  const {Type} = require('./abstract/Type')
  const {Singleton} = require('./Singleton')
  const {Error} = require('./Error')

  const instance = Singleton.getInstance();
  

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
"=="                {console.log("Se encontró token con valor: " + yytext);     return '==';}
"++"                {console.log("Se encontró token con valor: " + yytext);    return '++';}
"--"                {console.log("Se encontró token con valor: " + yytext);    return '--';}
"<="                {console.log("Se encontró token con valor: " + yytext);     return '<=';}
">="                {console.log("Se encontró token con valor: " + yytext);     return '>=';}
"="                 {console.log("Se encontró token con valor: " + yytext);     return '=';}
"!="                {console.log("Se encontró token con valor: " + yytext);     return '!=';}
"+"                 {console.log("Se encontró token con valor: " + yytext);     return '+';}
"-"                 {console.log("Se encontró token con valor: " + yytext);     return '-';}
"*"                 {console.log("Se encontró token con valor: " + yytext);     return '*';}
"/"                 {console.log("Se encontró token con valor: " + yytext);     return '/';}
"^"                 {console.log("Se encontró token con valor: " + yytext);     return '^';}
"%"                 {console.log("Se encontró token con valor: " + yytext);     return '%';}
"<"                 {console.log("Se encontró token con valor: " + yytext);     return '<';}
">"                 {console.log("Se encontró token con valor: " + yytext);     return '>';}
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

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                          const newError = new Error('Léxico', 'token desconocido: ' + yytext,  yylloc.first_line, yylloc.first_column)
                          const consoleResponse = 'Error léxico'+ ' ' + yytext + ' en linea y columna: ' + yylloc.first_line + yylloc.first_column + ' genere el reporte de errores para mas detalles'
                          instance.addError(newError)
                          instance.appendConsole(consoleResponse)

                        }
/lex





/*Operaciones logicas*/
%left '?'
%left '||'
%left '&&'
%left '>' '<' '<=' '>=' '!=' '=='

/*Operaciones numericas*/
%left '+' '-'
%left '*' '/' '%'
%nonassoc  '^'
%right negativo '!' '('

%left '++' '--'
%right ':'








%start INICIO

%% /* Definición de la gramática */

INICIO
	: INSTRUCTIONS EOF {console.log('ya entre'); return $1;}
;


// reserved words for type of variables
TYPE:
reserved_char      {$$ = Type.CHAR }
|reserved_boolean  {$$ = Type.BOOLEAN}
|reserved_int      {$$ = Type.INT}
|reserved_double   {$$ = Type.DOUBLE}
|reserved_string   {$$ = Type.STRING}
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

CAST: '(' TYPE ')' EXPRESSION {$$=new Cast($4, $2);} ;


LOWER_UPPER: reserved_toLower '(' EXPRESSION ')'  {$$ = new ToLower($3,@1.first_line,@1.first_column);}
            | reserved_toUpper '(' EXPRESSION ')'  {$$ = new ToUpper($3,@1.first_line,@1.first_column);}
        
;

LENGTH:reserved_length '(' EXPRESSION ')';

ROUND: reserved_round '(' EXPRESSION ')'  {$$ = new Round($3,@1.first_line,@1.first_column);};

TO_STRING: reserved_tostring '(' EXPRESSION ')' {$$ = new ToString($3,@1.first_line,@1.first_column);};

TO_CHAR_ARRAY: reserved_toCharArray '(' EXPRESSION ')';

TRUNCATE:reserved_truncate '(' EXPRESSION ')'  {$$ = new Truncate($3,@1.first_line,@1.first_column);};  

TYPE_OF:reserved_typeof '(' EXPRESSION ')' {$$= new TypeOf($3, @1.first_line, @1.first_column);};


// ============================================================================================================================

// statements
INCREASE: identifier '++' ';';

DECREASE: identifier '--' ';';



// ============================================================================================================================

// list of expressions

EXPRESSIONS: EXPRESSIONS ',' EXPRESSION
          |  EXPRESSION ;
            
EXPRESSION : OPERAND  {$$=$1;}
    | EXPRESSION '+' EXPRESSION         {$$= new ArithmeticOperation($1,$3,'plus', @1.first_line, @1.first_column);}       
    | EXPRESSION '-' EXPRESSION         {$$= new ArithmeticOperation($1,$3,'minus', @1.first_line, @1.first_column);}           
    | EXPRESSION '*' EXPRESSION         {$$= new ArithmeticOperation($1,$3,'multiply', @1.first_line, @1.first_column);}            
    | EXPRESSION '/' EXPRESSION         {$$= new ArithmeticOperation($1,$3,'division', @1.first_line, @1.first_column);}
    | EXPRESSION '^' EXPRESSION         {$$= new ArithmeticOperation($1,$3,'power', @1.first_line, @1.first_column);} 
    | EXPRESSION '%' EXPRESSION         {$$= new ArithmeticOperation($1,$3,'module', @1.first_line, @1.first_column);}         
    | '-' EXPRESSION %prec negativo     {$$= new ArithmeticOperation($2,$2,'negation', @1.first_line, @1.first_column);}              
    | '(' EXPRESSION ')'                {$$=$2;}           
    | EXPRESSION '=='  EXPRESSION       {$$= new RelationalOperation($1,$3,'==', @1.first_line, @1.first_column);}              
    | EXPRESSION '!='  EXPRESSION       {$$= new RelationalOperation($1,$3,'!=', @1.first_line, @1.first_column);}           
    | EXPRESSION '<'   EXPRESSION       {$$= new RelationalOperation($1,$3,'<', @1.first_line, @1.first_column);}          
    | EXPRESSION '>'   EXPRESSION       {$$= new RelationalOperation($1,$3,'>', @1.first_line, @1.first_column);}           
    | EXPRESSION '<='  EXPRESSION       {$$= new RelationalOperation($1,$3,'<=', @1.first_line, @1.first_column);}            
    | EXPRESSION '>='  EXPRESSION       {$$= new RelationalOperation($1,$3,'>=', @1.first_line, @1.first_column);}    
    | '!' EXPRESION	                    {$$= new LogicalOperation($2,$2,'!', @1.first_line, @1.first_column);}
    | EXPRESSION '&&'  EXPRESSION       {$$= new LogicalOperation($1,$3,'&&', @1.first_line, @1.first_column);}
    | EXPRESSION '||'  EXPRESSION       {$$= new LogicalOperation($1,$3,'||', @1.first_line, @1.first_column);}                                                             
    | CAST                              {$$=$1;}                                                                                                                    
    | LOWER_UPPER                       {$$=$1;}                       
    | ROUND                             {$$=$1;}                        
    | LENGTH                            //TODO                        
    | TO_STRING                         {$$=$1;}                     
    | TO_CHAR_ARRAY                     //TODO                        
    | TRUNCATE                          {$$=$1;}                        
    | TYPE_OF                           {$$=$1;}
    | VECTOR_ACCESS                     {$$=$1;}
    | LIST_ACCESS                       //TODO
    | FUNCTION_CALL                     //TODO
    | TERNARY                           {$$=$1;}
    | identifier                        {$$= new VariableAccess($1, @1.first_line, @1.first_column);} 

    ;         
// ====================================================================================================================================
// basic expressions



VECTOR_ACCESS: identifier '[' EXPRESSION ']' {$$= new VectorAccess($1, $3 ,@1.first_line, @1.first_column);} 
               ;

LIST_ACCESS: identifier '[' '[' EXPRESSION ']' ']' ;



FUNCTION_CALL: identifier '(' EXPRESSIONS ')' 
                | identifier  '('')' 
;

TERNARY:	EXPRESSION '?' EXPRESSION ':' EXPRESSION     {$$= new Ternary($1, $3, $5, @1.first_line, @1.first_column);} 
;




// list of instructions

INSTRUCTIONS: INSTRUCTIONS INSTRUCTION {$1.push($2); $$=$1; console.log('entre a instrucciones');}
            | INSTRUCTION              {$$ = [$1]; console.log('entre a instruccion');}

;

INSTRUCTIONS2: INSTRUCTIONS2 INSTRUCTION2
            | INSTRUCTION2

;
 
INSTRUCTION: DECLARATION {$$ = $1;}
           | reserved_main FUNCTION_CALL
           | PRINT {$$ = $1;}
           | error ';' {


             console.log("error sintactico en linea " + (yylineno+1) );

           }
           
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
           | FUNCTION_CALL
           | PRINT {$$ = $1;}
           
;


PRINT : reserved_print '(' EXPRESSION ')' ';'  {$$ = new Print(@1.first_line,@1.first_column ,$3)} ;


RETURN_STATEMENT: reserved_return ';'
       | reserved_return EXPRESSION ';'

;

DECLARATION: VARIABLE_DECLARATION  {$$=$1}
           | VECTOR_DECLARATION    {$$=$1}
           | LIST_DECLARATION
;


VARIABLE_DECLARATION: TYPE identifier  ';'                {$$=new VariableDeclaration($2, $1, null, @1.first_line, @1.first_column )}
                    | TYPE identifier '=' EXPRESSION ';'  {$$=new VariableDeclaration($2, $1, $4, @1.first_line, @1.first_column )}
                    ;

VARIABLE_ASIGNATION: identifier '=' OPERAND ';'
                     |identifier '=' identifier ';'
                   ;       

VECTOR_DECLARATION: TYPE '[' ']' identifier '=' reserved_new TYPE '[' EXPRESSION ']' ';' {$$=new VectorDeclaration($4, $1, $7, $9 ,@1.first_line, @1.first_column )}
                   |TYPE '[' ']' identifier '=' '{' VALUE_LIST '}' ';' {$$=new VectorDeclaration($4, $1, $1, $7 ,@1.first_line, @1.first_column )}
                    ;


VALUE_LIST: VALUE_LIST ',' EXPRESSION  {$1.push($3); $$=$1;}
          |EXPRESSION                  {$$ = [$1];}
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