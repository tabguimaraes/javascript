//Teste de conexão do JS com a página
console.log('Conexão OK');

//Capturar evento de 'submit' do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (evento) {
	evento.preventDefault();
	const inputPeso = evento.target.querySelector('#peso');
	const inputAltura = evento.target.querySelector('#altura');

	const peso = Number(inputPeso.value);
	const altura = Number(inputAltura.value);

	if (!peso || !altura) {
		gerarResultado('Valor inválido', false);
		return;
	}

	const imc = getIMC(peso, altura);
	const nivelIMC = tabelaIMC(imc);

	const mensagem = `Seu IMC é <strong>${imc}</strong> (${nivelIMC}).`;

	gerarResultado(mensagem, true);
});

function tabelaIMC(imc) {
	const nivel = [
		'Abaixo do peso',
		'Peso normal',
		'Sobrepeso',
		'Obesidade grau 1',
		'Obesidade grau 2',
		'Obesidade grau 3',
	];

	if (imc >= 39.9) return nivel[5];
	if (imc >= 34.9) return nivel[4];
	if (imc >= 29.9) return nivel[3];
	if (imc >= 24.9) return nivel[2];
	if (imc >= 18.5) return nivel[1];
	if (imc < 18.5) return nivel[0];
}

function getIMC(peso, altura) {
	const imc = peso / altura ** 2;
	return imc.toFixed(1);
}

function criarParagrafo() {
	//Criar parágrafo para o resultado:
	const p = document.createElement('p');
	return p;
}

function gerarResultado(mensagem, isValid) {
	const resultado = document.querySelector('#resultado');

	//Zerar o HTML do campo de resultado
	resultado.innerHTML = '';

	const p = criarParagrafo();
	if (isValid) {
		p.classList.add('paragrafoResultado');
	} else {
		p.classList.add('incorreto');
	}

	//Mensagem a ser adicionada
	p.innerHTML = mensagem;

	//Add paragrafo ao campo de resultado
	resultado.appendChild(p);
}
