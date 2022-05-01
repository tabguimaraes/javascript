console.log('Conexão ok');

function cronometro() {
	const valorCronometro = document.querySelector('#valorCronometro');

	const statusRelogio = document.querySelector('#statusRelogio');

	let segundos = 0;

	let timer;

	function contardorSegundos(segundos) {
		const data = new Date(segundos * 1000);
		return data.toLocaleTimeString('pt-BR', {
			hour12: false,
			timeZone: 'GMT',
		});
	}

	document.addEventListener('click', function (getEvent) {
		const elemento = getEvent.target;

		if (elemento === document.getElementById('iniciar')) {
			console.log('iniciar');
			clearInterval(timer);
			statusRelogio.classList.remove('pausado');
			valorCronometro.style.cssText = 'color: rgba(255, 0, 0, 0.808)';
			timer = setInterval(function () {
				segundos++;
				valorCronometro.innerHTML = contardorSegundos(segundos);
			}, 1000);
			statusRelogio.innerText = '';
		}

		if (elemento === document.getElementById('pausar')) {
			console.log('pausar');
			clearInterval(timer);
			statusRelogio.classList.add('pausado');
			statusRelogio.innerText = '';
			statusRelogio.innerHTML = 'PAUSADO';
		}

		if (elemento === document.getElementById('zerar')) {
			console.log('zerar');
			clearInterval(timer);
			valorCronometro.style.cssText = 'color: rgba(0, 0, 0)';
			statusRelogio.innerText = '';
			valorCronometro.innerHTML = '00:00:00';
			segundos = 0;
		}
	});
}

cronometro();
