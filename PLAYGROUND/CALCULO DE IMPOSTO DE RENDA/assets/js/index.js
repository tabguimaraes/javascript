const express = require('express'); // Importando o Express
const app = express(); //Iniciando o Express

app.listen(function (erro) {
	if (erro) {
		console.log('Erro');
	} else {
		console.log('Servidor iniciado');
	}
});
