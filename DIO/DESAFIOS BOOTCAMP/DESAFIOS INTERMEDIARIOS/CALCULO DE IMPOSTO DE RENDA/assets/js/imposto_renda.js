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

let salario = 4501;

const salarioLivreDeImposto = 2000.0,
  salarioAte3K = 3000.0,
  salarioAte4_5K = 4500.0,
  debitoAte3K = 1000,
  debitoAte4_5K = 1500,
  taxaAte3K = 0.08,
  taxaAte4_5K = 0.18,
  taxaMaior4_5K = 0.28;

let saldoAte3K, saldoAte4_5K, saldoMaior4_5K, imposto;

// FAIXA DE SALARIO ISENTO DE IMPOSTO
if (salario <= salarioLivreDeImposto) {
  console.log("Salário isento de imposto.");
}

// SALARIO ENTRE 2000 E 3000 - FAIXA 1 DE CONTRIBUIÇÃO
if (salario > salarioLivreDeImposto && salario <= salarioAte3K) {
  saldoAte3K = salario - salarioLivreDeImposto;

  imposto = saldoAte3K * taxaAte3K;

  console.log(`Imposto devido sobre salários entre R$ 2.000,00 e R$ 3.000,00: R$ ${imposto.toFixed(2)}`);
}

// SALARIO ENTRE 3000 E 4500 - FAIXA 2 DE CONTRIBUIÇÃO
if (salario > salarioAte3K && salario <= salarioAte4_5K) {
  salario = salario - salarioLivreDeImposto;

  salario = salario - debitoAte3K;
  saldoAte3K = debitoAte3K * taxaAte3K;

  saldoAte4_5K = salario * taxaAte4_5K;

  imposto = saldoAte3K + saldoAte4_5K;

  console.log(`Imposto devido sobre salários entre R$ 3.000,00 e R$ 4.500,00: R$ ${imposto.toFixed(2)}`);

  // SALARIO ACIMA DE 4500 - FAIXA 3 DE CONTRIBUIÇÃO
} else {
  salario = salario - salarioLivreDeImposto;

  salario = salario - debitoAte3K;
  saldoAte3K = debitoAte3K * taxaAte3K;

  salario = salario - debitoAte4_5K;
  saldoAte4_5K = debitoAte4_5K * taxaAte4_5K;

  saldoMaior4_5K = salario * taxaMaior4_5K;

  imposto = saldoAte3K + saldoAte4_5K + saldoMaior4_5K;

  console.log(`Imposto devido sobre salários superiores a R$ 4.500,00: R$ ${imposto.toFixed(2)}`);
}

//When I wrote this code, only two people knew what it did: God and me. Now, only God knows.
