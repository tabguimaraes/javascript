//

//
// let i = 0;

// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

// gerador de numeros de 1 a 60

function random(min, max) {
	const r = Math.random() * (max - min) + min;
	return Math.floor(r);
}

const min = 1;
const max = 60;

//ARMAZENAR OS NUMEROS DENTRO DE UM ARRAY
let numerosParaJogo = [];

while (numerosParaJogo.length <= 6) {
	let numeroRandom = random();
	numerosParaJogo.push(numeroRandom);
	console.log(numerosParaJogo);
}
