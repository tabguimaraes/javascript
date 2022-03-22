//OBJETO DATE
// REFERÊNCIA PARA CONSULTA:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

function saudacao() {
	let data = new Date();
	let hora = data.getHours;

	if (hora >= 0 && hora <= 12) {
		console.log('Bom dia');
	} else if (hora > 12 && hora <= 18) {
		console.log('Boa tarde');
	} else {
		console.log('Boa noite');
	}
}

saudacao();
let data = new Date();
let hora = data.getHours;
console.log(hora);
