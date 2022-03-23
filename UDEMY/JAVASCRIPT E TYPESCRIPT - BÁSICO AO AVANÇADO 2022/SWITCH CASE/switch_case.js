const data = new Date('1971-12-23 00:00:00');
let diaDaSemana = data.getDay();

switch (diaDaSemana) {
	case 0:
		console.log('Domingo');
		break;
	case 1:
		console.log('Segunda');
		break;
	case 2:
		console.log('Terça');
		break;
	case 3:
		console.log('Quarta');
		break;
	case 4:
		console.log('Quinta');
		break;
	case 5:
		console.log('Sexta');
		break;
	default:
		console.log('Sabado');
}
