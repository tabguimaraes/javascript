// USA APENAS '? : ' PARA SELECIONAR RETORNO ENTRE DUAS OPÇÃO DEFINIDAS PELA EXPRESSÃO
// REFERÊNCIA PARA CONSULTA
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// EXEMPLO USANDO IF:

let pontuacaoUsuario = 1000;

if (pontuacaoUsuario >= 1000) {
	console.log('Usuário VIP (usando If / Else)');
} else {
	console.log('Usuário normal (Usando If / Else)');
}

// EXEMPLO USANDO OPERADOR TERNÁRIO:

let nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario + ' (usando operador ternário)');

// EXEMPLO USANDO UM FALLBACK, QUANDO O USUÁRIO NÃO INFORMA NENHUM VALOR

// SISTEMA VAI BUSCAR A COR SELECIONADA NA VARIÁVEL 'corUsuário' E SE NÃO HOUVER, USARÁ O PADRÃO.
// NESTE EXEMPLO, A COR 'PRETO'

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);
