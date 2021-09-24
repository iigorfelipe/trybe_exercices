// Bônus:
// Faça uma nova função que some somente os números ímpares!
// resultado esperado: 23

let array = [2, 3, 4, 5, 6, 8, 12, 24, 15, 11];
function sumAllOdds(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] %2 !== 0) {
      soma += array[i];
      
    }
  }
  return soma;
}

console.log(sumAllOdds(array));