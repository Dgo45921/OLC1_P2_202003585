%{
  // importar tipos
  const {Primitive} = require('./expressions/Primitive')
  const {ArithmeticOperation} = require('./expressions/ArithmeticOperation')
  const {RelationalOperation} = require('./expressions/RelationalOperation')
  const {LogicalOperation} = require('./expressions/LogicalOperation')
  const {VariableAccess} = require('./expressions/VariableAccess')
  const {VectorAccess} = require('./expressions/VectorAccess')
  const {ListAccess} = require('./expressions/ListAccess')
  const {Ternary} = require('./expressions/Ternary')
  const {TypeOf} = require('./expressions/TypeOf')
  const {ToCharArray} = require('./expressions/ToCharArray')
  const {Cast} = require('./expressions/Cast')
  const {ToUpper} = require('./expressions/ToUpper')
  const {ToString} = require('./expressions/ToString')
  const {Round} = require('./expressions/Round')
  const {Truncate} = require('./expressions/Truncate')
  const {Length} = require('./expressions/Length')
  const {Print} = require('./instruction/Print')
  const {VectorDeclaration} = require('./instruction/VectorDeclaration')
  const {ModVectorList} = require('./instruction/ModVectorList')
  const {IncreaseDecrease} = require('./instruction/IncreaseDecrease')
  const {ForLoop} = require('./instruction/ForLoop')
  const {WhileLoop} = require('./instruction/WhileLoop')
  const {DoWhileLoop} = require('./instruction/DoWhileLoop')
  const {Asignation} = require('./instruction/Asignation')
  const {Block} = require('./instruction/Block')
  const {MethodDeclaration} = require('./instruction/MethodDeclaration')
  const {IfStatement} = require('./instruction/IfStatement')
  const {FunctionDeclaration} = require('./instruction/FunctionDeclaration')
  const {Call} = require('./instruction/Call')
  const {ListDeclaration} = require('./instruction/ListDeclaration')
  const {Return} = require('./instruction/Return')
  const {ToLower} = require('./expressions/ToLower')
  const {VariableDeclaration} = require('./instruction/VariableDeclaration')
  const {ListAddition} = require('./instruction/ListAddition')
  const {Main} = require('./instruction/Main')
  const {Type} = require('./abstract/Type')
  const {Singleton} = require('./Singleton')
  const {Parameter} = require('./Parameter')
  const {Error} = require('./Error')

  const instance = Singleton.getInstance();
  

%}



/* Definición Léxica */
%lex

%options case-insensitive 

%x string

%%

/* Whitespaces */
[\r\f\s\t\n]          {}                           // white spaces
\/\/.*                           {}                // oneLineComment
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

LENGTH:reserved_length '(' EXPRESSION ')'  {$$ = new Length($3,@1.first_line,@1.first_column);}
        ;

ROUND: reserved_round '(' EXPRESSION ')'  {$$ = new Round($3,@1.first_line,@1.first_column);};

TO_STRING: reserved_tostring '(' EXPRESSION ')' {$$ = new ToString($3,@1.first_line,@1.first_column);};

TO_CHAR_ARRAY: reserved_toCharArray '(' EXPRESSION ')'  {$$ = new ToCharArray($3,@1.first_line,@1.first_column);};

TRUNCATE:reserved_truncate '(' EXPRESSION ')'  {$$ = new Truncate($3,@1.first_line,@1.first_column);};  

TYPE_OF:reserved_typeof '(' EXPRESSION ')' {$$= new TypeOf($3, @1.first_line, @1.first_column);};


// ============================================================================================================================

// statements
INCREASE: identifier '++'  {$$= new IncreaseDecrease($1, '++', @1.first_line, @1.first_column);}
 ;
DECREASE: identifier '--'  {$$= new IncreaseDecrease($1, '--', @1.first_line, @1.first_column);} 
;



// ============================================================================================================================

// list of expressions


            
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
    | LENGTH                            {$$=$1;}                       
    | TO_STRING                         {$$=$1;}                     
    | TO_CHAR_ARRAY                     {$$=$1;}                       
    | TRUNCATE                          {$$=$1;}                        
    | TYPE_OF                           {$$=$1;}
    | VECTOR_ACCESS                     {$$=$1;}
    | LIST_ACCESS                       {$$=$1;}
    | FUNCTION_CALL                     {$$=$1;}
    | TERNARY                           {$$=$1;}
    | identifier                        {$$= new VariableAccess($1, @1.first_line, @1.first_column);} 

    ;         
// ====================================================================================================================================
// basic expressions



VECTOR_ACCESS: identifier '[' EXPRESSION ']' {$$= new VectorAccess($1, $3 ,@1.first_line, @1.first_column);} 
               ;

LIST_ACCESS: identifier '[' '[' EXPRESSION ']' ']' {$$= new ListAccess($1, $4 ,@1.first_line, @1.first_column);}
;


VECTOR_MODIFICATION: identifier '[' EXPRESSION ']' '=' EXPRESSION ';' {$$= new ModVectorList($1, $3,$6 ,@1.first_line, @1.first_column);}

;

LIST_MODIFICATION: identifier '[' '[' EXPRESSION ']' ']' '=' EXPRESSION ';' {$$= new ModVectorList($1, $4,$8 ,@1.first_line, @1.first_column);}

;


FUNCTION_CALL: identifier '(' ARGUMENTS ')' {$$=new Call($1,$3,@1.first_line, @1.first_column)}



;


ARGUMENTS: ARGUMENT ',' ARGUMENTS  {$3.unshift($1); $$=$3;}
            | ARGUMENT {$$=[$1];}
            | 
            ;

ARGUMENT: EXPRESSION {$$=$1} ;


TERNARY:	EXPRESSION '?' EXPRESSION ':' EXPRESSION     {$$= new Ternary($1, $3, $5, @1.first_line, @1.first_column);} 
;




// list of instructions

INSTRUCTIONS: INSTRUCTIONS INSTRUCTION {$1.push($2); $$=$1; console.log('entre a instrucciones');}
            | INSTRUCTION              {$$ = [$1]; console.log('entre a instruccion');}

;

INSTRUCTIONS2: INSTRUCTIONS2 INSTRUCTION2 {$1.push($2); $$=$1; console.log('entre a instrucciones2');}
            | INSTRUCTION2                 {$$ = [$1]; console.log('entre a instruccion2');}
 
;
 
INSTRUCTION: DECLARATION {$$ = $1;}
           | reserved_main FUNCTION_CALL ';' {$$=new Main($2,@1.first_line, @1.first_column)}
           | PRINT {$$ = $1;}
           | METHOD_DECLARATION {$$ = $1;}
           | FUNCTION_DECLARATION {$$ = $1;}
           | error ';' { console.log("error sintactico en linea " + (yylineno+1) );}
             
           
;

INSTRUCTION2: DECLARATION          {$$ = $1;}
           | LIST_ADDITION         {$$ = $1;}
           | INCREASE    ';'       {$$ = $1;}
           | DECREASE    ';'       {$$ = $1;}
           | VARIABLE_ASIGNATION   {$$ = $1;}
           | IF_STATEMENT          {$$ = $1;}
           | SWITCH_STATEMENT      //TODO
           | FOR_STATEMENT         {$$ = $1;}
           | DO_WHILE_STATEMENT    //TODO
           | WHILE_STATEMENT       {$$ = $1;}
           | reserved_break ';'    //TODO
           | reserved_continue ';' //TODO
           | RETURN_STATEMENT      {$$ = $1;}
           | FUNCTION_CALL';'      {$$ = $1;}
           | PRINT                 {$$ = $1;}
           | VECTOR_MODIFICATION   {$$ = $1;}
           | LIST_MODIFICATION     {$$ = $1;}
           
;


PRINT : reserved_print '(' EXPRESSION ')' ';'  {$$ = new Print(@1.first_line,@1.first_column ,$3)} ;


RETURN_STATEMENT: reserved_return ';' {$$=new Return(null,@1.first_line, @1.first_column);}
                 | reserved_return EXPRESSION ';' {$$=new Return($2,@1.first_line, @1.first_column);}

;

DECLARATION: VARIABLE_DECLARATION    {$$=$1}
           | VECTOR_DECLARATION      {$$=$1}
           | LIST_DECLARATION        {$$=$1}
;



METHOD_DECLARATION : reserved_void identifier '(' PARAMETERS ')' BLOCK   {$$=new MethodDeclaration($2,$4,$6,@1.first_line, @1.first_column)}
;


BLOCK :'{' INSTRUCTIONS2 '}'  {$$=new Block($2, @1.first_line, @1.first_column)}
        | '{'  '}'            {}
      ; 


VARIABLE_DECLARATION: TYPE identifier  ';'                {$$=new VariableDeclaration($2, $1, null, @1.first_line, @1.first_column )}
                    | TYPE identifier '=' EXPRESSION ';'  {$$=new VariableDeclaration($2, $1, $4, @1.first_line, @1.first_column )}
                    ;

VARIABLE_ASIGNATION: identifier '=' EXPRESSION ';'        {$$=new Asignation($1, $3, @1.first_line, @1.first_column )}
                   ;    


VARIABLE_ASIGNATION2: identifier '=' EXPRESSION          {$$=new Asignation($1, $3, @1.first_line, @1.first_column )}
                   ;      

VECTOR_DECLARATION: TYPE '[' ']' identifier '=' reserved_new TYPE '[' EXPRESSION ']' ';' {$$=new VectorDeclaration($4, $1, $7, $9 ,@1.first_line, @1.first_column )}
                   |TYPE '[' ']' identifier '=' '{' VALUE_LIST '}' ';' {$$=new VectorDeclaration($4, $1, $1, $7 ,@1.first_line, @1.first_column )}
                    ;


VALUE_LIST: VALUE_LIST ',' EXPRESSION  {$1.push($3); $$=$1;}
          |EXPRESSION                  {$$ = [$1];}
;


LIST_DECLARATION:reserved_list '<' TYPE '>' identifier '=' reserved_new reserved_list '<' TYPE '>' ';'  {$$=new ListDeclaration($5, $3, $10,null ,@1.first_line, @1.first_column )}
                 | reserved_list '<' TYPE '>' identifier '=' reserved_toCharArray '(' stringValue ')' ';'  {$$=new ListDeclaration($5, $3, $3, $9 ,@1.first_line, @1.first_column )}
  ;

LIST_ADDITION:identifier '.' reserved_add '(' EXPRESSION ')' ';' {$$=new ListAddition($1, $5 ,@1.first_line, @1.first_column )} ;


IF_STATEMENT: reserved_if '(' EXPRESSION ')' BLOCK ELSE_IF_STATEMENT {$$ = new IfStatement($3, $5, $6 ,@1.first_line, @1.first_column )} 
            ;

ELSE_IF_STATEMENT:  reserved_else IF_STATEMENT  {$$ =$2}
                  | reserved_else BLOCK         {$$ =$2}
                  |                             {$$ =null}
                  ;


SWITCH_STATEMENT: reserved_switch '(' EXPRESSION ')' '{' CASE_LIST '}'
                  | reserved_switch '(' EXPRESSION ')' '{' reserved_default ':' INSTRUCTIONS2 '}'
                  | reserved_switch '(' EXPRESSION ')' '{' CASE_LIST reserved_default ':' INSTRUCTIONS2 '}'
;

CASE_LIST: CASE_LIST reserved_case EXPRESSION ':' INSTRUCTIONS2
          | reserved_case EXPRESSION ':' INSTRUCTIONS2


 ;




 FOR_STATEMENT: reserved_for '(' FOR_FIRST_CONDITION  EXPRESSION ';' VARIABLE_ASIGNATION2 ')' BLOCK  {$$=new ForLoop($3, $4 ,$6,$8,@1.first_line, @1.first_column )} 
               |reserved_for '(' FOR_FIRST_CONDITION  EXPRESSION ';' INCREASE   ')' BLOCK            {$$=new ForLoop($3, $4 ,$6,$8,@1.first_line, @1.first_column )} 
               |reserved_for '(' FOR_FIRST_CONDITION  EXPRESSION ';' DECREASE  ')' BLOCK             {$$=new ForLoop($3, $4 ,$6,$8,@1.first_line, @1.first_column )} 
 
              ;

FOR_FIRST_CONDITION: VARIABLE_ASIGNATION   {$$=$1}
                    | VARIABLE_DECLARATION {$$=$1}

;              

FOR_THIRD_CONDITION: EXPRESSION INCREASE
                    | EXPRESSION DECREASE
                    | identifier '=' EXPRESSION

                    ;


DO_WHILE_STATEMENT: reserved_do BLOCK reserved_while '(' EXPRESSION ')' ';' {$$ = new DoWhileLoop($5, $2 ,@1.first_line, @1.first_column )}     ;  

WHILE_STATEMENT: reserved_while '(' EXPRESSION ')'   BLOCK  {$$=new WhileLoop($3, $5 ,@1.first_line, @1.first_column )} ;      


FUNCTION_DECLARATION: TYPE identifier '(' PARAMETERS ')' BLOCK {$$=new FunctionDeclaration($1,$2,$4,$6,@1.first_line, @1.first_column)}

                 
                    

;

PARAMETERS: PARAMETER ',' PARAMETERS {$3.unshift($1); $$=$3;}
          |PARAMETER {$$=[$1];}
          |
          
;

PARAMETER:TYPE identifier  {$$=new Parameter($1,$2,@1.first_line, @1.first_column);};