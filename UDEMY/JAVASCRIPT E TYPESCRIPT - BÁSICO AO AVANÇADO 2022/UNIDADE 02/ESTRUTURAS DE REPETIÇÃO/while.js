//

// Função para gerar números aleatórios
function random(min, max) {
	const r = Math.random() * (max - min) + min;
	return Math.floor(r); // Método para arredondar o resultado para baixo, transformando o número em inteiro
}

// Chamar a função e gerar de numeros de 1 a 60
let NumeroRandom = random(1, 60);
// console.log(NumeroRandom);

//Array para salvar os números
let numerosParaJogo = [];

while (numerosParaJogo.length < 6) {
	NumeroRandom = random(1, 60);
	if (numerosParaJogo.includes(NumeroRandom)) {
		NumeroRandom = random(1, 60);
	} else {
		numerosParaJogo.push(NumeroRandom);
	}
}

numerosParaJogo.sort(function (a, b) {
	return a - b;
});

console.log('##########################');
console.log(numerosParaJogo);
console.log('##########################');
