/*
OPERADORES DE COMPARAÇÃO

> Maior que

< Menor que

>= Maior ou igual a 

<= Menor ou igual a 

== Igualdade (valor) >>>>>> Não recomendado na maioria dos casos

=== Igualdade estrita (valor e tipo)

!= Diferente (valor) >>>>>> Não recomendado na maioria dos casos

!== Diferente estrito (valor e tipo)
*/

// EXEMPLOS

console.log('');
console.log('Exemplo de Maior que:');
console.log(`10 > 5: ${10 > 5}\n`); //Retorna True

console.log('Exemplo de Menor que:');
console.log(`10 < 5: ${10 < 5}\n`); //Retorna False

console.log('Exemplo de Maior Igual a:');
console.log(`10 >= 5: ${10 >= 5}\n`); //Retorna True

console.log('Exemplo de Menor Igual a:');
console.log(`10 <= 5: ${10 <= 5}\n`); //Retorna False

console.log('Exemplo de == Igualdade (valor):');
console.log(`'10'(string) == 10 (number): ${'10' == 10}\n`); //Retorna True

console.log('Exemplo de === Igualdade estrita(valor e tipo):');
console.log(`'10'(string) === 10 (number): ${'10' === 10}\n`); //Retorna False

console.log('Exemplo de != Diferente de (valor):');
console.log(`'10'(string) != 10 (number): ${'10' != 10}\n`); //Retorna False

console.log('Exemplo de !== Diferente estrito (valor e tipo):');
console.log(`'10'(string) !== 10 (number): ${'10' !== 10}\n`); //Retorna True
