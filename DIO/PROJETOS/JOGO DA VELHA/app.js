console.log('Conexão ok');

const celulas = document.querySelectorAll('.celula');
console.log(celulas);
let verificarTurno = true;

const player_X = 'X';
const player_0 = '0';

document.addEventListener('click', (event) => {
	if (event.target.matches('.celula')) {
		jogar(event.target.id);
	}
});

function jogar(id) {
	const celula = document.getElementById(id);
	turno = verificarTurno ? player_X : player_0;
	celula.textContent = turno;
	verificarTurno = !verificarTurno;
	verificarVencedor(turno);
}

// function verificarVencedor() {
// 	console.log('teste');
// }
