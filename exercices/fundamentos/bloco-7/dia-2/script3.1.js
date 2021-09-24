// Desenvolva uma função que receba um array de números e retorne verdadeiro se TODOS os valores forem maior que 18, falso caso contrário
// Ex: [20, 30, 19, 1, 50] => resultado esperado: false
// Ex: [20, 30, 19, 19] => resultado esperado: true


let array = [55, 19];

function allGreaterThanEighteen(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 18) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(allGreaterThanEighteen(array))