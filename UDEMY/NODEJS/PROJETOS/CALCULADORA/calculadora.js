// PROJETO DE TESTE DE USO DE MODULOS

// FUNÇÕES DA CALCULADORA PARA EXPORTAR NO ARQUIVO APP.JS
// USO: SEPARAÇÃO DAS FUNÇÕES DE OUTROS MODULOS PERMITE UMA ORGANIZAÇÃO MAIOR DO CÓDIGO

function soma(a, b) {
	return a + b;
}

function sub(a, b) {
	return a - b;
}

function div(a, b) {
	return a / b;
}

function mult(a, b) {
	return a * b;
}


// TODAS AS FUNÇÕES EXTÃO SENDO EXPORTADAS EM UM ÚNICO MÓDULO
module.exports = {
	soma,
	sub,
	div,
	mult,
};
