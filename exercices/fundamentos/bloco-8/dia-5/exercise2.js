// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const sum = (...numbers) => (numbers.reduce(((acc, val) => acc + val), 0));
console.log(sum(5,8,4,6,9,7,8));