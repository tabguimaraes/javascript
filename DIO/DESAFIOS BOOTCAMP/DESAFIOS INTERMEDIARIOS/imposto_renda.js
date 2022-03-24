// Taxa de Imposto de Renda

/* Há um país denominado Lolipad, todos os habitantes ficam felizes em pagar
seus impostos, pois sabem que nele não existem políticos corruptos e os
recursos arrecadados são utilizados em benefício da população, sem qualquer
desvio. A moeda deste país é o Loli, cujo símbolo é o R$.
Você terá o desafio de ler um valor com duas casas decimais, equivalente ao
salário de uma pessoa de Loli. Em seguida, calcule e mostre o valor que esta
pessoa deve pagar de Imposto de Renda, segundo a tabela abaixo. */

/* TABELA:

- ATÉ 2.000 >> ISENTO

- DE 2.000,01 ATÉ 3.000,00 >> 0.08

- DE 3000,01 ATÉ 4.500,00 >> 0.18

- ACIMA DE 4500,00 >> 0.28

*/

/* Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas
sobre R$ 1000.00, pois a faixa de salário que fica de R$ 0.00 até R$ 2000.00
é isenta de Imposto de Renda. No exemplo fornecido (abaixo), a taxa é de 8%
sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 no total. O
valor deve ser impresso com duas casas decimais.
- Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.
- Saída
Imprima o texto "R$" seguido de um espaço e do valor total devido de Imposto
de Renda, com duas casas após o ponto. Se o valor de entrada for menor ou
igual a 2000, deverá ser impressa a mensagem "Isento". */

//

let salario = 4500;

const isento = 'ISENTO';

const faixaSalario1 = 2000.0;
const faixaSalario2 = 3000.0;
const faixaSalario3 = 4500.0;

const taxa1 = 0.08;
const taxa2 = 0.18;
const taxa3 = 0.28;

let saldoFaixa1 = 0;
let saldoFaixa2 = 0;
let saldoFaixa3 = 0;

let imposto = 0;

// FAIXA DE SALARIO ISENTO DE IMPOSTO
if (salario <= faixaSalario1) {
	console.log(isento);

	// SALARIO ENTRE 2000 E 3000 - FAIXA 1 DE CONTRIBUIÇÃO
} else if (salario > faixaSalario1 && salario <= faixaSalario2) {
	saldoFaixa1 = salario - faixaSalario1;

	imposto = saldoFaixa1 * taxa1;

	console.log(`Imposto devido na faixa 1 de contribuição: R$ ${imposto.toFixed(2)}`);

	// SALARIO ENTRE 3000 E 4500 - FAIXA 2 DE CONTRIBUIÇÃO
} else if (salario > faixaSalario2 && salario <= faixaSalario3) {
	salario = salario - faixaSalario1;
	saldoFaixa1 = 1000 * taxa1;

	salario = salario - 1000;
	saldoFaixa2 = salario * taxa2;

	imposto = saldoFaixa1 + saldoFaixa2;

	console.log(`Imposto devido na faixa 2 de contribuição: R$ ${imposto.toFixed(2)}`);

	// SALARIO ACIMA DE 4500 - FAIXA 3 DE CONTRIBUIÇÃO
} else {
	salario = salario - faixaSalario1;

	salario = salario - 1000;
	saldoFaixa1 = 1000 * taxa1;

	salario = salario - 1500;

	saldoFaixa2 = 1500 * taxa2;

	saldoFaixa3 = salario * taxa3;

	imposto = saldoFaixa1 + saldoFaixa2 + saldoFaixa3;

	console.log(`Imposto devido na faixa 3 de contribuição: R$ ${imposto.toFixed(2)}`);
}
