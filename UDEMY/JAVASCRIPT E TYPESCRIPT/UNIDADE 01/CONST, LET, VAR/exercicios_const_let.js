//Aula 16 - Exercícios com 'const' e 'let'

const nome = 'Tiago';
const sobreNome = 'Guimarães';
const idade = 41;
const peso = 79;
const alturaEmM = 1.9;

let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;

console.log(
	`O IMC de ${nome} é de ${imc}.\nO ano de nascimento é ${anoNascimento}.\nA idade atual é de ${idade} anos.`
);
