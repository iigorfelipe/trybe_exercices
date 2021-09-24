// Desenvolva uma função que recebe um array e retorna a soma de todos os números desse array
// resultado esperado: 59

let array = [2, 3, 4, 6, 8, 12, 24]
function sumAllNumbers(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i += 1) {
    soma += array[i];
  }
  return soma;
}

console.log(sumAllNumbers(array));