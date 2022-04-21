/*
OPERADORES LÓGICOS

&& >> AND ('E') - TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR VERDADEIRO

|| >> OR ('OU') - APENAS UMA EXPRESSÃO PRECISA SER VERDADEIRA PARA RETORNAR VERDADEIRO

! >> NOT ('NÃO') - SE A EXPRESSÃO FOR VERDADEIRO, ELA RETORNA FALSO. SE ELA FOR FALSA, RETORNA VERDADEIRO

*/

//EXEMPLOS

const expressaoAnd = true && true && true;
console.log(expressaoAnd);

const expressaoOr = false || true || false;
console.log(expressaoOr);

const expressaoNot = !true;
console.log(expressaoNot);
