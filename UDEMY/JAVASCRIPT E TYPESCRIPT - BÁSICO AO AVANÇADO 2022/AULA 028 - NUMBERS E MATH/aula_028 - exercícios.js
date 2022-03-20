/* OBJETIVOS:

Descobrir o valor digitado pelo usuário e inserir no documento html os testes abaixo:

O número digitado é: N
A raíz quadrada dele é: N
O número N é inteiro? False ou True
Arrendondando para baixo ele fica:N
Arrendondando para cima ele fica:N
Com duas casa decimais: N
O valor em binário é: 
*/

const numeroDigitado = Number(prompt('Digite um número: ')); //Forçar conversão para número. Prompt sempre retorna uma string

const exibirNumero = document.getElementById('exibirNumero');

const numeroMais2 = document.getElementById('numeroMais2');

const raizQuadrada = document.getElementById('raizQuadrada');

const verificarInteiro = document.getElementById('verificarInteiro');

const arredondaBaixo = document.getElementById('arredondaBaixo');

const arredondaCima = document.getElementById('arredondaCima');

const duasCasasDecimais = document.getElementById('duasCasasDecimais');

const valorBinario = document.getElementById('valorBinario');

exibirNumero.innerHTML = numeroDigitado;

numeroMais2.innerHTML = `<p>Seu número + 2 é ${numeroDigitado + 2}. </p>`;

raizQuadrada.innerHTML = `<p>A raíz quadrada é ${numeroDigitado ** 0.5}. </p>`;

verificarInteiro.innerHTML = `<p>O número ${numeroDigitado} é inteiro?: ${Number.isInteger(
  numeroDigitado
)}. </p>`;

arredondaBaixo.innerHTML = `<p>O número ${numeroDigitado} arredondado para baixo é: ${Math.floor(
  numeroDigitado
)}. </p>`;

arredondaCima.innerHTML = `<p>O número ${numeroDigitado} arredondado para cima é: ${Math.ceil(
  numeroDigitado
)}. </p>`;

duasCasasDecimais.innerHTML = `<p>O número ${numeroDigitado} com duas casas decimais é: ${numeroDigitado.toFixed(
  2
)}. </p>`;

valorBinario.innerHTML = `<p>O número ${numeroDigitado} em binário é: ${numeroDigitado.toString(
  2
)}. </p>`;
