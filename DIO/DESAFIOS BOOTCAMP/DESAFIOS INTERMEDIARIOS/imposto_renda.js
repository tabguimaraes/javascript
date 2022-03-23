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

// NECESSITA REESTRUTURAÇÃO //
let salario = 3002.0;
const isento = 'ISENTO';

const faixa1 = 0.08;
const faixa2 = 0.18;
const faixa3 = 0.28;

if (salario <= 2000.0) {
	console.log(isento);
	//
} else if (salario > 2000.0 && salario <= 3000.0) {
	saldo = salario - 2000.0;
	imposto = saldo * faixa1;
	console.log(`Imposto devido R$ ${imposto.toFixed(2)}`);
	//
} else if (salario > 3000.0 && salario <= 4500.0) {
	excedente = salario - 3000.0;
	aux1 = excedente * faixa2;
	aux2 = (salario - 2000.0 - excedente) * 0.08;
	saldo = aux1 + aux2;

	console.log(`Imposto devido R$ ${saldo.toFixed(2)}`);
} else {
	saldo = salario - 2000.0;
	imposto = saldo;
}
