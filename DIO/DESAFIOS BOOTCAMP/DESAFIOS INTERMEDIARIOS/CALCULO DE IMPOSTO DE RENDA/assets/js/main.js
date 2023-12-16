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
sobre R$ 1000.00 + 18% sobre R$ 2, o que resulta em R$ 80.36 no total. O
valor deve ser impresso com duas casas decimais.
- Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.
- Saída
Imprima o texto "R$" seguido de um espaço e do valor total devido de Imposto
de Renda, com duas casas após o ponto. Se o valor de entrada for menor ou
igual a 2000, deverá ser impressa a mensagem "Isento". */

function init() {
  const form = document.querySelector("#formSalario");

  form.addEventListener("submit", event);

  //Capturar evento de 'submit' do formulário
  function event(evento) {
    evento.preventDefault();
    calcularImposto(evento);
  }

  function calcularImposto(evento) {
    const inputSalario = evento.target.querySelector("#salario").value.replace(",", ".");

    //Sinal de '+' antes da variável inputSalario transforma a string em number
    let salario = +inputSalario;

    if (!salario || salario <= 0) {
      gerarResultado("Valor inválido");
      return;
    }

    const salarioLivreDeImposto = 2000,
      salarioAte3K = 3000,
      salarioAte4_5K = 4500,
      debitoAte3K = 1000,
      debitoAte4_5K = 1500,
      taxaAte3K = 0.08,
      taxaAte4_5K = 0.18,
      taxaMaior4_5K = 0.28;

    let saldoAte4_5K, saldoMaior4_5K, imposto;

    // FAIXA DE SALARIO ISENTO DE IMPOSTO
    if (salario <= salarioLivreDeImposto) {
      gerarResultado("Salário isento de imposto");

      // SALARIO ENTRE 2000 E 3000 - FAIXA 1 DE CONTRIBUIÇÃO
    } else if (salario > salarioLivreDeImposto && salario <= salarioAte3K) {
      imposto = (salario - salarioLivreDeImposto) * taxaAte3K;
      gerarResultado(`Imposto devido: ${imposto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);

      // SALARIO ENTRE 3000 E 4500 - FAIXA 2 DE CONTRIBUIÇÃO
    } else if (salario > salarioAte3K && salario <= salarioAte4_5K) {
      saldoAte4_5K = salario - salarioLivreDeImposto - debitoAte3K; 
      imposto = debitoAte3K * taxaAte3K + saldoAte4_5K * taxaAte4_5K;
      gerarResultado(`Imposto devido: ${imposto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);

      // SALARIO ACIMA DE 4500 - FAIXA 3 DE CONTRIBUIÇÃO
    } else {
      saldoMaior4_5K = salario - salarioLivreDeImposto - debitoAte3K - debitoAte4_5K;
      imposto = debitoAte3K * taxaAte3K + debitoAte4_5K * taxaAte4_5K + saldoMaior4_5K * taxaMaior4_5K;
      gerarResultado(`Imposto devido: ${imposto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
    }
  }
  function criarParagrafo() {
    //Criar parágrafo para o resultado:
    const p = document.createElement("p");
    return p;
  }

  function gerarResultado(mensagem, isValid) {
    const resultado = document.querySelector("#resultado");

    //Zerar o HTML do campo de resultado
    resultado.innerHTML = "";

    const p = criarParagrafo();
    if (isValid) {
      p.classList.add("paragrafoResultado");
    } else {
      p.classList.add("incorreto");
    }

    //Mensagem a ser adicionada
    p.innerHTML = mensagem;

    //Add paragrafo ao campo de resultado
    resultado.appendChild(p);
  }
}
init();
//When I wrote this code, only two people knew what it did: God and me. Now, only God knows.
