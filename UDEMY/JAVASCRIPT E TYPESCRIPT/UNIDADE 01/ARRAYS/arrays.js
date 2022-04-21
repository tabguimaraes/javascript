//ARRAYS

//array inicial
let alunos = ['Maria', 'João', 'José'];
console.log(`A lista inicial é:\n${alunos}`);
console.log();

//PUSH adiciona no FINAL do array
alunos.push('Miguel');
console.log(`Aluno adicionado ao final da lista>>\n${alunos}`);
console.log();

//UNSHIFT adiciona no COMEÇO do array - Evitar, pois move todos os itens do array e pode causar problemas de performance
alunos.unshift('Marlene');
console.log(`Aluno adicionado no começo da lista>>\n${alunos}`);
console.log();

//POP exclui ULTIMO item do array e foi guardado em uma variável
const removidoFim = alunos.pop();
console.log(`Aluno retirado do final da lista>>\n${alunos}`);
console.log(`O aluno removido foi:\n${removidoFim}`);
console.log();

//SHIFT exclui primeiro item do array e foi guardado em uma variável
const removidoInicio = alunos.shift();
console.log(`Aluno retirado do inicio da lista>>\n${alunos}`);
console.log(`O aluno removido foi:\n${removidoInicio}`);
console.log();

//DELETE exclui apenas o item do array, mantendo o indice ativo, porém vazio
delete alunos[1];
console.log('Lista de alunos com item 1 deletado, mantendo o indice ativo e vazio:\n', alunos);
console.log();

console.log(`A lista de alunos atual é:\n${alunos}.`);
console.log();

console.log(`A lista tem ${alunos.length} itens.`); //mostra o tamanho do array
console.log();

//SLICE (FATIAMENTO)
alunos = ['Marlene', 'Maria', 'João', 'José', 'Miguel'];
console.log(alunos);
//METODO POSITIVO (INICIO DO CORTE, FINAL DO CORTE)
console.log(alunos.slice(0, 3));
console.log();

//METODO NEGATIVO (INICIO DO CORTE, FINAL DO CORTE)
alunos = ['Marlene', 'Maria', 'João', 'José', 'Miguel'];
console.log(alunos);
console.log(alunos.slice(1, -2));
console.log();

let lista = [];
for (contador = 1; contador <= 21; contador++) {
	lista.push(contador);
}
console.log(lista);
