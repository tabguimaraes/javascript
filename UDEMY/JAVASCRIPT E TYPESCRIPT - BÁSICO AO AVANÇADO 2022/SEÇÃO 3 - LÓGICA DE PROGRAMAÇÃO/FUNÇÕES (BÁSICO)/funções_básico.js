//FUNÇÕES
//REFERÊNCIA PARA CONSULTA:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions

// PARAMETROS DA FUNÇÃO FICAM DENTRO DOS PARENTESES APÓS O NOME DA FUNÇÃO. NESTE EXEMPLO (NOME)
//

function saudacao(nome) {
	return `Bom dia ${nome}!\nA soma de 2 + 2 é: ${2 + 2}`; // Pode-se usar o return para que a função retorne algum valor
	// Tudo que estiver abaixo de RETURN não é executado
}

// UTILIZADO O ARGUMENTO 'TIAGO'PARA O PARAMETRO (NOME) DA FUNÇÃO SAUDACAO
//

let mostraSoma = saudacao('Tiago');
console.log(mostraSoma);
console.log();

//EXEMPLO DE FUNÇÃO QUE FAZ A SOMA DE 2 VALORES (X, Y):
//

function somaValores(x, y) {
	const resultadoSoma = x + y;
	return resultadoSoma;
}

console.log(somaValores(2, 3));
console.log(somaValores(5, 7));
console.log(somaValores(10, 6));
console.log(somaValores(2, 8));

//FUNÇÃO 'ANÔNIMA' DENTRO DE VARIÁVEL
//

let raizQuadrada = function (n) {
	return n ** 0.5;
};

console.log(raizQuadrada(9));
console.log(raizQuadrada(16));
console.log(raizQuadrada(25));
console.log();

//ARROW FUNCTION
//

let raizQ = (n) => n ** 0.5; // Simplificação: Toda a expressão foi colocada em apenas uma linha
console.log(raizQ(9));
console.log(raizQ(16));
console.log(raizQ(25));
console.log();
