console.log('Conexão ok');

const container = document.querySelector('#container');

const valorCronometro = document.querySelector('#valorCronometro');

const iniciar = document.querySelector('#iniciar');

const pausar = document.querySelector('#pausar');

const zerar = document.querySelector('#zerar');

const statusRelogio = document.querySelector('#statusRelogio');

let segundos = 0;

let timer;

function iniciarCronometro() {
	clearInterval(timer);
	statusRelogio.classList.remove('pausado');
	valorCronometro.style.cssText = 'color: rgba(255, 0, 0, 0.808)';
	timer = setInterval(function () {
		segundos++;
		valorCronometro.innerHTML = contardorSegundos(segundos);
	}, 1000);
	statusRelogio.innerText = '';
}

function pausarCronometro() {
	clearInterval(timer);
	statusRelogio.classList.add('pausado');
	statusRelogio.innerText = '';
	statusRelogio.innerHTML = 'PAUSADO';
}

function zerarCronometro() {
	clearInterval(timer);
	valorCronometro.style.cssText = 'color: rgba(0, 0, 0)';
	statusRelogio.innerText = '';
	valorCronometro.innerHTML = '00:00:00';
	segundos = 0;
}

function contardorSegundos(segundos) {
	const data = new Date(segundos * 1000);
	return data.toLocaleTimeString('pt-BR', {
		hour12: false,
		timeZone: 'GMT',
	});
}

iniciar.addEventListener('click', iniciarCronometro);
zerar.addEventListener('click', zerarCronometro);
pausar.addEventListener('click', pausarCronometro);
