// PROGRAMA PARA VERIFICAR OS PRÓXIMO 6 IMPARES DE UM NUMERO 'N' DIGITADO PELO USUÁRIO

let num = 5; // Inserir prompt de solicitação ao usuário
let result = num;

if (num % 2 === 0) {
	result = result + 1;
	console.log(`Os próximos impares do número ${num} são:\n`);
	console.log(result);
	for (let i = 0; i < 5; i++) {
		result = result + 2;
		console.log(result);
	}
} else {
	console.log(`Os impares à partir do número ${num} são:\n`);
	console.log(num);
	for (let i = 0; i < 5; i++) {
		num = num + 2;
		console.log(num);
	}
}
//
//
