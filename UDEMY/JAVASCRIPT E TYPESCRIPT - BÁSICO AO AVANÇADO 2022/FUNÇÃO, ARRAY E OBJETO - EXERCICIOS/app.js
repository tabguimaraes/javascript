//

console.log('teste de conexão ok');

//

function meuEscopo() {
	const form = document.querySelector('.form');
	const resultado = document.querySelector('.resultado');
	const pessoas = [];

	function recebeEventoForm(evento) {
		evento.preventDefault();

		const nome = form.querySelector('.nome');
		const sobreNome = form.querySelector('.sobreNome');
		const peso = form.querySelector('.peso');
		const altura = form.querySelector('.altura');
		console.log(nome.value, sobreNome.value, peso.value, altura.value);
	}

	form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
