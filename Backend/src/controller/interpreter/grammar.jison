/* Definición Léxica */
%lex

%options {
dotall: true
case-insensitive
}
%x string

%%


// reserved symbols
"+"                 {console.log("Se encontró token con valor: " + yytext);     return 'plus';}
"-"                 {console.log("Se encontró token con valor: " + yytext);     return 'minus';}
"*"                 {console.log("Se encontró token con valor: " + yytext);     return 'multiply';}
"/"                 {console.log("Se encontró token con valor: " + yytext);     return 'division';}
"^"                 {console.log("Se encontró token con valor: " + yytext);     return 'power';}
"%"                 {console.log("Se encontró token con valor: " + yytext);     return 'module';}
"="                 {console.log("Se encontró token con valor: " + yytext);     return 'equals';}
"=="                {console.log("Se encontró token con valor: " + yytext);     return 'equals_equals';}
"!="                {console.log("Se encontró token con valor: " + yytext);     return 'not_equal';}
"<"                 {console.log("Se encontró token con valor: " + yytext);     return 'lessThan';}
">"                 {console.log("Se encontró token con valor: " + yytext);     return 'greaterThan';}
"<="                {console.log("Se encontró token con valor: " + yytext);     return 'lessOrEqual';}
">="                {console.log("Se encontró token con valor: " + yytext);     return 'greatOrEqual';}
"!"                 {console.log("Se encontró token con valor: " + yytext);     return "not";}
"?"                 {console.log("Se encontró token con valor: " + yytext);     return 'interrogation';}
":"                 {console.log("Se encontró token con valor: " + yytext);     return 'colon';}
";"                 {console.log("Se encontró token con valor: " + yytext);     return 'semiColon';}
"||"                {console.log("Se encontró token con valor: " + yytext);     return 'or';}
"&&"                {console.log("Se encontró token con valor: " + yytext);     return 'and';}
"("                 {console.log("Se encontró token con valor: " + yytext);     return 'openParenthesis';}
")"                 {console.log("Se encontró token con valor: " + yytext);     return 'closedParenthesis';}
"{"                 {console.log("Se encontró token con valor: " + yytext);     return 'openBracket';}
"}"                 {console.log("Se encontró token con valor: " + yytext);     return 'closedBracket';}
","                 {console.log("Se encontró token con valor: " + yytext);     return 'coma';}
"["                 {console.log("Se encontró token con valor: " + yytext);     return 'openSquareBracket';}
"]"                 {console.log("Se encontró token con valor: " + yytext);     return 'closedSquareBracket';}
"."                 {console.log("Se encontró token con valor: " + yytext);     return 'dot';}

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
"print"               {console.log("Se encontró token con valor: " + yytext); return 'reserved_print';}
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
"new"                {console.log("Se encontró token con valor: " + yytext); return 'reserved_new';}





/* Whitespaces */
[\r|\f|\s|\t|\n]                   {}              // white spaces
(\/\/).*                           {}              // oneLineComment
\/\*[\s\S]*?\*\/                   {}              // multilineComment

/*  regex   */

[a-zA-Z][a-zA-Z0-9_]*                                {console.log("Se encontró token con valor: " + yytext); return 'identifier';}
[0-9]+.[0-9]+                                        {console.log("Se encontró token con valor: " + yytext); return 'decimalNum';}
[0-9]+                                               {console.log("Se encontró token con valor: " + yytext); return 'integerNum';}
[\']([^']|"\\n"|"\\t"|(\\)(\\))?[\']                 {console.log("Se encontró token con valor: " + yytext); return 'charValue';}
["]                                                  {cadena=""; this.begin("string");}
<string>[^"\\]+                                      {cadena+=yytext;}
<string>"\\\""                                       {cadena+="\"";}
<string>"\\n"                                        {cadena+="\n";}
<string>"\\t"                                        {cadena+="\t";}
<string>"\\\\"                                       {cadena+="\\";}
<string>"\\\'"                                       {cadena+="\'";}
<string>["]                                          {console.log("Se encontró token con valor: " + yytext); yytext=cadena; this.popState(); return 'stringValue';}



<<EOF>>                 return 'EOF';

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);}
/lex
%left 'or'
%left 'and'
%left 'equals_equals' 'not_equal' 'lessThan' 'lessOrEqual' 'greaterThan' 'greatOrEqual'
%left 'plus' 'minus'
%left 'division' 'multiply' 'module'
%left 'power'
%right 'not'
%right 'Uminus'



%{
  // importar tipos


%}



%start INICIO

%% /* Definición de la gramática */

INICIO
	: INSTRUCTIONS EOF {console.log('ya entre')}
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
OPERAND:  integerNum
        | decimalNum
        | charValue
        | stringValue
        | reserved_false
        | reserved_true 
        ;

// =========================================================================================================================

// built-in functions

CAST: openParenthesis TYPE closedParenthesis EXPRESSION  ;


LOWER_UPPER: reserved_toLower openParenthesis EXPRESSION closedParenthesis 
            | reserved_toUpper openParenthesis EXPRESSION closedParenthesis
        
;

LENGTH:reserved_length openParenthesis EXPRESSION closedParenthesis;

ROUND: reserved_round openParenthesis EXPRESSION openParenthesis;

TO_STRING: reserved_tostring openParenthesis EXPRESSION closedParenthesis;

TO_CHAR_ARRAY: reserved_toCharArray openParenthesis EXPRESSION closedParenthesis;

TRUNCATE:reserved_truncate openParenthesis EXPRESSION closedParenthesis;

TYPE_OF:reserved_typeof openParenthesis EXPRESSION closedParenthesis;

// ============================================================================================================================

// statements
INCREASE: identifier plus plus semiColon;

DECREASE: identifier minus minus semiColon;

// ============================================================================================================================

// list of expressions

EXPRESSIONS: EXPRESSIONS EXPRESSION
          |  EXPRESSION ;
            
EXPRESSION: minus EXPRESSION  %prec Uminus                             {console.log('encontre un negativo a una expresion')} // -(4+5)
          | not EXPRESSION                                             {console.log('encontre una negacion de expresion')}
          | EXPRESSION plus EXPRESSION                                 {console.log('encontre una suma')}
          | EXPRESSION minus EXPRESSION                                {console.log('encontre una resta')}
          | EXPRESSION multiply EXPRESSION                             {console.log('encontre una multiplicacion')}
          | EXPRESSION division EXPRESSION                             {console.log('encontre una division')}
          | EXPRESSION power EXPRESSION                                {console.log('encontre una potencia')}
          | EXPRESSION module EXPRESSION                               {console.log('encontre un modulo')}
          | EXPRESSION equals_equals EXPRESSION                        {console.log('encontre una comparacion')}
          | EXPRESSION equals EXPRESSION                               {console.log('encontre una asignacion')}
          | EXPRESSION not_equal EXPRESSION                            {console.log('encontre un "no igual a "')}
          | EXPRESSION not                                             {console.log('encontre una negacion')}
          | EXPRESSION lessThan EXPRESSION                             {console.log('encontre una comparacion menor que')}
          | EXPRESSION greaterThan EXPRESSION                          {console.log('encontre una comparacion mayor que')}
          | EXPRESSION lessOrEqual EXPRESSION                          {console.log('encontre una comparacion menor o igual que')}
          | EXPRESSION greatOrEqual EXPRESSION                         {console.log('encontre una comparacion mayor o igual que')}
          | EXPRESSION or  EXPRESSION                                  {console.log('encontre una comparacion or')}
          | EXPRESSION and EXPRESSION                                  {console.log('encontre una comparacion and')}
          | openParenthesis EXPRESSION closedParenthesis               {console.log('encontre una expresion entre parentesis')}
          | INCREASE                                                   {console.log('encontre un aumento de variable ++')}
          | DECREASE                                                   {console.log('encontre un decremento de variable --')}
          | TERNARY                                                    {console.log('encontre un operador ternario')}
          | CAST                                                       {console.log('encontre un casteo')}  
          | OPERAND                                                    {console.log('encontre un operador')}
          | FUNCTION_CALL                                              {console.log('encontre una llamada a funcion')}
          | LOWER_UPPER                                                {console.log('encontre una llamada a to lower o to upper')}
          | ROUND                                                      {console.log('encontre una llamada a round')}
          | LENGTH                                                     {console.log('encontre una llamada a length')}
          | TO_STRING                                                  {console.log('encontre una llamada a tostring')}
          | TO_CHAR_ARRAY                                              {console.log('encontre una llamada a toCharArray')}
          | TRUNCATE                                                   {console.log('encontre una llamada a truncate')}
          | TYPE_OF                                                    {console.log('encontre una llamada a typeof')}
          | identifier
          ;
// ====================================================================================================================================

// basic expressions

TERNARY: EXPRESSION interrogation EXPRESSION colon EXPRESSION ;

VECTOR_ACCESS: identifier openSquareBracket EXPRESSION closedSquareBracket
               ;

LIST_ACCESS: identifier openSquareBracket openSquareBracket EXPRESSION closedSquareBracket closedSquareBracket ;


FUNCTION_CALL:
              identifier openParenthesis PARAMETERS_CALL closedParenthesis
              | identifier openParenthesis closedParenthesis 
;

FUNCTION_CALL2:
              identifier openParenthesis PARAMETERS_CALL closedParenthesis semiColon
              | identifier openParenthesis closedParenthesis semiColon 
;

PARAMETERS_CALL:
                PARAMETERS_CALL coma EXPRESSION
               |EXPRESSION
               |
;

// ===========================================================================================================================================






// list of instructions

INSTRUCTIONS: INSTRUCTIONS INSTRUCTION
            | INSTRUCTION

;

INSTRUCTIONS2: INSTRUCTIONS INSTRUCTION2
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
           |
;

INSTRUCTION2: DECLARATION 
           | LIST_ADDITION
           | INCREASE
           | DECREASE
           | IF_STATEMENT
           | SWITCH_STATEMENT
           | FOR_STATEMENT
           | DO_WHILE_STATEMENT
           | reserved_break semiColon
           | reserved_continue semiColon
           | RETURN_STATEMENT
           | FUNCTION_CALL2
           | 
;


RETURN_STATEMENT: reserved_return semiColon
       | reserved_return EXPRESSION semiColon

;

DECLARATION: VARIABLE_DECLARATION
           | VECTOR_DECLARATION
           | LIST_DECLARATION
;


VARIABLE_DECLARATION: TYPE identifier semiColon 
                    | TYPE identifier equals EXPRESSION semiColon
                    ;

VARIABLE_ASIGNATION: identifier equals OPERAND semiColon
                     identifier equals identifier semiColon
                   ;       

VECTOR_DECLARATION:TYPE openSquareBracket closedSquareBracket identifier equals reserved_new TYPE openSquareBracket EXPRESSION closedSquareBracket semiColon 
                   TYPE openSquareBracket closedSquareBracket identifier equals openBracket VALUE_LIST closedBracket semiColon
                    ;


VALUE_LIST: VALUE_LIST coma EXPRESSION
          |EXPRESSION
;


LIST_DECLARATION:reserved_list lessThan TYPE greaterThan identifier equals reserved_new reserved_list lessThan TYPE greaterThan semiColon;

LIST_ADDITION:identifier dot reserved_add openParenthesis EXPRESSION closedParenthesis semiColon ;


IF_STATEMENT: reserved_if openParenthesis EXPRESSION closedParenthesis openBracket INSTRUCTIONS2 closedBracket
            | reserved_if openParenthesis EXPRESSION closedParenthesis openBracket INSTRUCTIONS2 closedBracket reserved_else openBracket INSTRUCTIONS2 closedBracket
            | reserved_if openParenthesis EXPRESSION closedParenthesis openBracket INSTRUCTIONS2 closedBracket ELSE_IF_STATEMENT
            | reserved_if openParenthesis EXPRESSION closedParenthesis openBracket INSTRUCTIONS2 closedBracket ELSE_IF_STATEMENT reserved_else openBracket INSTRUCTIONS2 closedBracket
            ;

ELSE_IF_STATEMENT: ELSE_IF_STATEMENT reserved_else reserved_if openParenthesis EXPRESSION closedParenthesis openBracket INSTRUCTIONS2 closedBracket
                  | reserved_else reserved_if openParenthesis EXPRESSION closedParenthesis openBracket INSTRUCTIONS2 closedBracket
                  ;


SWITCH_STATEMENT: reserved_switch openParenthesis EXPRESSION closedParenthesis openBracket CASE_LIST closedBracket
                  | reserved_switch openParenthesis EXPRESSION closedParenthesis openBracket reserved_default colon INSTRUCTIONS2 closedBracket
                  | reserved_switch openParenthesis EXPRESSION closedParenthesis openBracket CASE_LIST reserved_default colon INSTRUCTIONS2 closedBracket
;

CASE_LIST: CASE_LIST reserved_case EXPRESSION colon INSTRUCTIONS2
          | reserved_case EXPRESSION colon INSTRUCTIONS2


 ;

 WHILE_STATEMENT:reserved_while openParenthesis EXPRESSION closedParenthesis openBracket INSTRUCTIONS2 closedBracket;


 FOR_STATEMENT: reserved_for openParenthesis FOR_FIRST_CONDITION EXPRESSION semiColon closedParenthesis openBracket INSTRUCTIONS2 closedBracket

 
              ;

FOR_FIRST_CONDITION:
                    VARIABLE_ASIGNATION
                    | VARIABLE_DECLARATION

;              

FOR_THIRD_CONDITION: EXPRESSION INCREASE
                    | EXPRESSION DECREASE
                    | identifier equals EXPRESSION

                    ;


DO_WHILE_STATEMENT: reserved_do openBracket INSTRUCTIONS2 closedBracket reserved_while openParenthesis EXPRESSION closedParenthesis semiColon;                    


FUNCTION_DECLARATION: TYPE identifier openParenthesis PARAMETERS closedParenthesis openBracket INSTRUCTIONS2 closedBracket
                    | reserved_void identifier openParenthesis PARAMETERS closedParenthesis openBracket INSTRUCTIONS2 closedBracket                    
                    

;

PARAMETERS:
           PARAMETERS coma TYPE identifier
          |TYPE identifier
          |
;

PRINT : reserved_print openParenthesis EXPRESSION closedParenthesis semiColon
;