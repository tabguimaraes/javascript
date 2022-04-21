/*

if...else
A condicional if  é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

Sintaxe
if (condição) afirmação1 [else afirmação2]

Exemplos

Usando if...else

if (cipher_char === from_char) {
   result = result + to_char;
   x++;
} else {
   result = result + clear_char;
}

Usando else if

Perceba que não existe sintaxe de elseif em JavaScript. Entretanto, você pode escrevê-la com um espaço entre o if e o  else.

if (x > 5) {

} else if (x > 50) {

} else {

}

Atribuições junto de expressões condicionais

É recomendado não utilizar atribuições simples junto de uma expressão condicional, visto que atribuições podem ser confundidas com igualdade ao olhar o código. Por exemplo, não use o código abaixo:

if (x = y) {

}

Caso você precise utilizar uma atribuição em uma expressão condicional, uma prática comum é inserir parênteses adicionais em volta da atribuição. Por exemplo:

if ((x = y)) {

}


*/

// Referência: 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else


