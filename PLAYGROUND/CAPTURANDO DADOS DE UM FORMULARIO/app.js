/*
SALVAR OS DADOS DE CADA CAMPO DO FORMULÁRIO EM UMA VARIÁVEL E EXIBIR ELES NO RODAPÉ DO FORM AO 
CLICAR NO BOTÃO ENVIAR
*/

//VERIFICAR SE O NAVEGADOR ESTÁ EXECUTANDO O SCRIPT CORRETAMENTE
console.log('teste de conexão ok');

//CRIAR UMA FUNÇÃO PARA FAZER A LEITURA E SALVAR OS DADOS DIGITADOS NO FORMULÁRIO
function meuEscopo() {
	//EVENTLISTENER: IDENTIFICAR QUANDO O BOTÃO É CLICADO E IMPEDIR O RELOAD DA PÁGINA ('SUBMIT')
	form.addEventListener('submit', function (evento) {
		evento.preventDefault();
		//CADA VARIÁVEL FOI CRIADA PARA SALVAR O RESPECTIVO CAMPO, DE ACORDO COM O ID DO FORM
		const nome = form.querySelector('.nome');
		const sobreNome = form.querySelector('.sobreNome');
		const peso = form.querySelector('.peso');
		const altura = form.querySelector('.altura');
	
		// ADICIONAR POR PUSH CADA USUÁRIO AO ARRAY
		pessoas.push({
			nome: nome.value,
			sobreNome: sobreNome.value,
			peso: peso.value,
			altura: altura.value,
		});
		console.log(pessoas);
	});
	
	const form = document.querySelector('.form'); // VARIAVEL PARA OS CAMPOS DO FORMULÁRIO
	const resultado = document.querySelector('.resultado'); // VARIAVEL PARA O CAMPO DO RESULTADO
	const pessoas = []; // ARRAY PARA SALVAR OS DADOS DO CADASTRO

	//INSERIR NA PÁGINA O RESULTADO DOS CAMPOS DIGITADOS, CADA UM EM UMA LINHA
	resultado.innerHTML += `<p id='result'>Nome: ${nome.value} ${sobreNome.value}. Peso: ${peso.value}kg. Altura: ${altura.value}m\n</p>`;

}

//CHAMADA DA FUNÇÃO PRINCIPAL
meuEscopo();
