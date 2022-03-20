//OBJETOS - BÁSICO
//REFERÊNCIA PARA CONSULTA:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects

//

//CRIANDO UMA VARIÁVEL DO TIPO OBJETO
const pessoa = {
	nome: 'Tiago',
	sobreNome: 'Guimarães',
	idade: 40,
	estadoCivil: 'Casado',
	nomeEsposa: 'Marlene',
	filhos: 'Sim',
	nomeFilho: 'Miguel',
};
console.log(pessoa);

//

//CRIANDO UMA FUNÇÃO PARA CRIAR UM OBJETO
function criaPessoa(nome, sobreNome, idade, estadoCivil, nomeEsposa, filhos, nomeFilho) {
	return { nome, sobreNome, idade, estadoCivil, nomeEsposa, filhos, nomeFilho };
}

//

//USANDO UMA FUNÇÃO PARA PREENCHER A VARIAVEL COM OS DADOS DO OBJETO
let pessoa1 = criaPessoa('Marlene', 'Ferreira', 50, 'Casada', 'Tiago', 'Sim', 'Miguel');

console.log(pessoa1);
console.log();

//

//CRIANDO UM OBJETO COM UMA FUNÇÃO PARA EXIBIR UMA MENSAGEM, DADO, ETC
const pessoaUm = {
	nome: 'Tiago',
	sobreNome: 'Guimarães',
	idade: 40,

	exibirMensagem() {
		console.log(`${this.nome} ${this.sobreNome} tem ${this.idade} anos`);
	},
};
pessoaUm.exibirMensagem();
console.log(pessoaUm);

//
