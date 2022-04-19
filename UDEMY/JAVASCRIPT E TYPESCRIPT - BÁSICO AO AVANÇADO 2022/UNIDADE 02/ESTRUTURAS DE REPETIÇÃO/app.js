//EM DESENVOLVIMENTO
/* PENDENTE:
- CRIAR FUNÇÃO P/ SALVAR OS NÚMEROS GERADOS NA FUNÇÃO 'RANDOM' DENTRO DO ARRAY
- CRIAR UM LAÇO PARA REPETIR 6X OS ARRAYS, MOSTRANDO A CADA TERMINO DA FUNÇÃO, O ARRAY COMPLETO COM OS NUMEROS GERADOS
- AJUSTE GERAL DO CÓDIGO

*/

// Função para gerar números aleatórios
function random(min, max) {
	const r = Math.random() * (max - min) + min;
	return Math.floor(r); // Método para arredondar o resultado para baixo, transformando o número em inteiro
}

function gerarNumero() {
	// Chamar a função e gerar de numeros de 1 a 60
	let numeroRandom = random(1, 60);
	let numeroDoVolante = [];
	while (numeroDoVolante.length < 6) {
		numeroRandom = random(1, 60);
		if (numeroDoVolante.includes(numeroRandom)) {
			numeroRandom = random(1, 60);
		} else {
			numeroDoVolante.push(numeroRandom);
			numeroDoVolante.sort(function (a, b) {
				return a - b;
			});
		}
	}
	return console.log(numeroDoVolante);
}

console.log(gerarNumero());


