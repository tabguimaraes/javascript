/*
for...in
O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  O laço pode ser executado para cada propriedade distinta do objeto. 

(Resumo: For in -> Lê os indices e chaves do objeto)

Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in

*/

frutas = ['maçã', 'uva', 'abacaxi'];

for (indice in frutas) {
	console.log(frutas[indice]);
}
console.log('//');
console.log('//');
console.log('//');

//

//Objeto
var obj = { a: 1, b: 2, c: 3 };

//Para prop (propriedade) in obj (objeto) faça
for (var prop in obj) {
	console.log('obj.' + prop + ' = ' + obj[prop]);
}
