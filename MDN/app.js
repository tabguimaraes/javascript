//FUNÇÃO PARA A SOMA DE TODOS OS NÚMEROS ENTRE 1 E 100

function somaValores() {
	let primeiroNumero = 1;
	let segundoNumero = 100;
	let soma = 0;

	soma = (primeiroNumero + segundoNumero) * Math.floor(segundoNumero / 2);
	return console.log(soma);
}
somaValores();
