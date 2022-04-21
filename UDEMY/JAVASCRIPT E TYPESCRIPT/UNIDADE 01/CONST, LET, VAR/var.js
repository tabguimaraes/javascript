/*
VAR

O variable statement declara uma variável, opcionalmente é possível atribuir à ela um valor em sua inicialização.

Resumo

Declarações de variáveis, onde quer que elas ocorram, são processadas antes que qualquer outro código seja executado. O escopo de uma variável declarada com  var é seu contexto atual em execução, o qual é a função a qual pertence ou, para variáveis declaradas fora de qualquer função, o escopo é o global.

Atribuir um valor a uma variável não declarada anteriormente implica em criar uma variável global (ela se torna uma propriedade do objeto global) quando a atribuição é executada. As diferenças entre uma variável declarada e uma não delcarada são:

1. Variáveis declaradas estão relacionadas com o contexto de execução quando elas são criadas (por exemplo, uma função, objeto). Por outro lado, as variaveis não declaradas sempre são globais.

function x() {
  y = 1;   // Lança a exceção ReferenceError em modo restrito (strict mode)
  var z = 2;
}

x();

console.log(y); // logs "1"
console.log(z); // Lança a exceção ReferenceError: z não foi definida fora da função x()


2. Variáveis declaradas são criadas antes de qualquer código ser executado. As variáveis não declaradas não existem até quando o código atribuir um valor a ela.

console.log(a);                // Lança a exceção ReferenceError.
console.log('still going...'); // Nunca será executado.
Copy to Clipboard
var a;
console.log(a);                // mostra "undefined" ou "" dependendo do naveador.
console.log('still going...'); // mostra "still going...".


3. Variáveis declaradas são propriedades não configuráveis no contexto de execução (função ou global). Variaveis não declaradas são configuráveis (por exemplo, podem ser excluídas).

var a = 1;
b = 2;

delete this.a; // Lança a exceção TypeError em modo restrito(strict mode). Caso contrário, Falha silenciosamente.
delete this.b;

console.log(a, b); // Throws a ReferenceError.
// A propriedade 'b' foi deletada e não existe mais.


Por conta dessas três diferenças, falha para declarar variáveis, muito provavelmente, levar a resultados inesperados. Então, é recomendado sempre declarar as variáveis, independentemente se as variáveis estão em escopo de função ou escopo global. E o modo restrito (strict mode) do ECMAScript 5 sempre lançará uma exceçao quando o código atribuir um valor a uma variável não declarada.

var hoisting
Como as declarações de variáveis (e declarações em geral) são processadas antes de qualquer código seja executado, declarar uma variável em qualquer lugar no código é equivalente a declarar no inicio. Isso também significa que uma variável pode aparecer para ser usada antes dela ser declarada. Esse comportamento é chamado de "hoisting", a variável é movida para o inicio da função ou do código global.


https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/var

*/
