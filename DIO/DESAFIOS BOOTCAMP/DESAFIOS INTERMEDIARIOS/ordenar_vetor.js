//
/*
DADO UM ARRAY, CRIAR UM LAÇO PARA PERCORRER TODO O VETOR E VERIFICAR SE O VALOR DA POSIÇÃO É O MESMO DO VALOR DO INDICE.

SE FOR, IGNORAR. CASO CONTRÁRIO, ADICIONAR O NÚMERO DENTRO DO ARRAY E ORDENÁ-LO DO MENOR PARA O MAIOR.

AO FINAL, MOSTRAR A LISTAGEM ORDENADA EM UM CONSOLE

*/

let vetorNumeros = [
	0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
	39, 40, 41, 42, 43, 44, 45, 46, 51, 52, 57, 58, 59, 60, 61, 62, 63, 66, 77, 78, 85, 86, 87, 88, 89, 90, 91, 92, 93,
	94, 95, 96, 97, 98, 99, 100,
];

for (let i = 0; vetorNumeros.length < 100; i++) {
	if (vetorNumeros.includes(i)) {
		continue;
	} else {
		numerosAdicionados = [];
		numerosAdicionados.push(i);
		vetorNumeros.push(i);
	}
}
vetorNumeros.sort(function (a, b) {
	return a - b;
});

console.log(vetorNumeros);
// console.log('==============');
// console.log(numerosAdicionados);

//EM DESENVOLVIMENTO
