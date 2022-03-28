console.log('Conexão ok');

const celulas = document.querySelectorAll('.celula');
console.log(celulas);
let verificarTurno = true;

const player_X = 'X';
const player_0 = '0';

const combinacoes = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

document.addEventListener('click', (event) => {
	if (event.target.matches('.celula')) {
		jogar(event.target.id);
	}
});

function jogar(id) {
	const celula = document.getElementById(id);
	turno = verificarTurno ? player_X : player_0;
	celula.textContent = turno;
	celula.classList.add(turno);

	verificarVencedor(turno);
}

function verificarVencedor(turno) {
	const vencedor = combinacoes.some((comb) => {
		return comb.every((index) => {
			return celulas[index].classList.contains(turno);
		});
	});
	if (vencedor) {
		gameOver(turno);
	} else if (verificarEmpate()) {
		gameOver();
	} else {
		verificarTurno = !verificarTurno;
	}
}

function verificarEmpate() {
	let x = 0;
	let o = 0;

	for (index in celulas) {
		if (!isNaN(index)) {
			if (celulas[index].classList.contains(player_X)) {
				x++;
			}
			if (celulas[index].classList.contains(player_0)) {
				o++;
			}
		}
	}

	return x + o === 9 ? true : false;
}

function gameOver(vencedor = null) {
	const telaEscura = document.getElementById('tela-escura');
	const h2 = document.createElement('h2');
	const h3 = document.createElement('h3');

	let mensagem = null;

	telaEscura.style.display = 'block';
	telaEscura.appendChild(h2);
	telaEscura.appendChild(h3);

	if (vencedor) {
		h2.innerHTML = `O vencedor é o jogador ${vencedor}`;
	} else {
		h2.innerHTML = `Empate`;
	}

	let cont = 3;
	setInterval(() => {
		h3.innerHTML = `Reiniciando em ${cont--}`;
	}, 1000);

	setTimeout(() => location.reload(), 4000);
}
