const numero = prompt('Digite um número: '); //prompt sempre retorna uma string
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número + 2 é ${Number(numero) + 2}. </p>`; //Usei a função Number para forçar a alteração para número
