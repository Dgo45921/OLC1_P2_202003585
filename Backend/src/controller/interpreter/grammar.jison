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
"<"                 {console.log("Se encontró token con valor: " + yytext);     return 'lessThan';}
">"                 {console.log("Se encontró token con valor: " + yytext);     return 'greaterThan';}
"!"                 {console.log("Se encontró token con valor: " + yytext);     return "exclamation";}
"?"                 {console.log("Se encontró token con valor: " + yytext);     return 'interrogation';}
":"                 {console.log("Se encontró token con valor: " + yytext);     return 'colon';}
";"                 {console.log("Se encontró token con valor: " + yytext);     return 'semiColon';}
"|"                 {console.log("Se encontró token con valor: " + yytext);     return 'vBar';}
"&"                 {console.log("Se encontró token con valor: " + yytext);     return 'ampersand';}
"("                 {console.log("Se encontró token con valor: " + yytext);     return 'openParenthesis';}
")"                 {console.log("Se encontró token con valor: " + yytext);     return 'closedParenthesis';}
"{"                 {console.log("Se encontró token con valor: " + yytext);     return 'openBracket';}
"}"                 {console.log("Se encontró token con valor: " + yytext);     return 'closedBracket';}
","                 {console.log("Se encontró token con valor: " + yytext);     return 'coma';}
"["                 {console.log("Se encontró token con valor: " + yytext);     return 'openSquareBracket';}
"]"                 {console.log("Se encontró token con valor: " + yytext);     return 'closedSquareBracket';}

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





/* Whitespaces */
[\r|\f|\s|\t|\n]                   {}              // white spaces
(\/\/).*                           {}              // oneLineComment
\/\*[\s\S]*?\*\/                   {}              // multilineComment

/*  regex   */

[a-zA-Z][a-zA-Z0-9_]*        {console.log("Se encontró token con valor: " + yytext); return 'identifier';}
[0-9]+.[0-9]+                {console.log("Se encontró token con valor: " + yytext); return 'decimalNum';}
[0-9]+                       {console.log("Se encontró token con valor: " + yytext); return 'num';}
'\\\'.'\\\''                 {console.log("Se encontró token con valor: " + yytext); return 'charValue';}
["]                             {cadena="";this.begin("string");}
<string>[^"\\]+                 {cadena+=yytext;}
<string>"\\\""                  {cadena+="\"";}
<string>"\\n"                   {cadena+="\n";}
<string>"\\t"                   {cadena+="\t";}
<string>"\\\\"                  {cadena+="\\";}
<string>"\\\'"                  {cadena+="\'";}
<string>["]                     {yytext=cadena; this.popState(); return 'CADENA';}

//\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2); console.log("Se encontró token con valor: " + yytext);  	return 'CADENA'; }


<<EOF>>                 return 'EOF';

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);}
/lex

%{
  // importar tipos
  const {Type} = require('./abstract/Return');
  const {Primitivo} = require('./expression/Primitivo');
  const {Print} = require('./instruction/Print');

%}


// PRECEDENCIA DE OPERADORES
%left 'MAS' 'MENOS'
%left 'POR' 'DIVISION' 'MODULO'
%right 'UMENOS '

%start INICIO

%% /* Definición de la gramática */

INICIO
	: INSTRUCCIONES EOF {return $1;}
;

INSTRUCCIONES
	: INSTRUCCIONES INSTRUCCION     { $1.push($2); $$ = $1; }
	| INSTRUCCION                   { $$ = [$1]; }
;

INSTRUCCION
	: DEFPRINT          { $$ = $1; }
	| error PTCOMA
  {   console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);}
;

// GRAMATICA IMPRIMIR
DEFPRINT
    : RPRIN PARIZQ EXPRESION PARDER PTCOMA  { $$ = new Print(@1.first_line, @1.first_column,$3); }
;


EXPRESION
  : PRIMITIVO       { $$ = $1; }
;

PRIMITIVO
  : ENTERO          { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.INT); }
  | DECIMAL         { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.DOUBLE); }
  | CADENA          { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.STRING);}
  | CARACTER        { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.CHAR); }
  | TRUE            { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.BOOLEAN); }
  | FALSE           { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.BOOLEAN); }
;