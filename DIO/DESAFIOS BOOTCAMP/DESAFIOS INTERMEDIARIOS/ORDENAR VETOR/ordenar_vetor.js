//
/*
DADO UM ARRAY, CRIAR UM LAÇO PARA PERCORRER TODO O VETOR E VERIFICAR SE O VALOR DA POSIÇÃO É O MESMO DO VALOR DO INDICE.

SE FOR, IGNORAR. CASO CONTRÁRIO, ADICIONAR O NÚMERO DENTRO DO ARRAY E ORDENÁ-LO DO MENOR PARA O MAIOR.

AO FINAL, MOSTRAR A LISTAGEM COMPLETA E ORDENADA EM UM CONSOLE E UMA LISTA COM OS NÚMEROS FALTANTES

*/

let vetorNumeros = [
	1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 14, 15, 20, 24, 25, 26, 27, 28, 29, 30, 34, 35, 36, 39, 40, 41, 42, 45, 46, 51,
	57, 58, 59, 60, 66, 77, 78, 85, 86, 87, 88, 89, 90, 94, 95, 98, 99, 100,
];

let numerosAdicionados = [];

console.log('========================================');
console.log(`\nExistem ${vetorNumeros.length} números dentro da lista inicial.`);

for (let i = 0; vetorNumeros.length <= 100; i++) {
	if (vetorNumeros.includes(i)) {
		continue;
	} else {
		numerosAdicionados.push(i);
		vetorNumeros.push(i);
	}
}
vetorNumeros.sort(function (a, b) {
	return a - b;
});

console.log(`\nLista completa e ordenada do menor para o maior:\n`);
console.log(vetorNumeros);
console.log('\n========================================\n');
console.log(`Os números faltantes da lista original são:\n`);
console.log(numerosAdicionados);

//
