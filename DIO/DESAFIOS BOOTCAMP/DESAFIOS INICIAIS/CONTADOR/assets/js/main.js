function contador() {
	console.log('Conexão ok');

	const numero = document.getElementById('numero');
	let valor = 0;

	document.addEventListener('click', function (getEvent) {
		const elemento = getEvent.target;
		if (elemento === document.getElementById('adicionar')) {
			valor++;
			numero.innerHTML = valor;
		}
		if (elemento === document.getElementById('subtrair')) {
			valor--;
			numero.innerHTML = valor;
		}
	});
}
contador();
