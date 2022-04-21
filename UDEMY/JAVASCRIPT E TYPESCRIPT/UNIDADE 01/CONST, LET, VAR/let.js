/*
LET

Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.

Resumo

let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword var, que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.

Nota do tradutor: o trecho acima: "independentemente do escopo de bloco", na verdade, significa dizer que variáveis declaradas dentro de blocos internos da função, por exemplo, são vinculadas no escopo da função, não no bloco no qual elas são declaradas. Se isso parece confuso - e realmente é -, apenas entenda que, ao contrário do que se poderia supor, em Javascript blocos não possuem escopo como em outras linguagens, somente funções têm! Isso quer dizer que mesmo uma váriavel definida com a keyword var dentro de um bloco de instrução if, será visível no resto inteiro da função.

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let

*/
