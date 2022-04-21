// FOR OF: TRÁS O VALOR (NÃO RETORNA O INDICE)
// FUNCIONA PARA ARRAY E STRING

let nome = 'tiago guimarães';
let nomes = ['tiago', 'guimarães', 'teste de nome'];

for (let letras of nome) {
	console.log(letras);
}

//trás o valor e indice usando a função
nomes.forEach(function (valorArray, indice) {
	console.log(valorArray, indice);
});
