//  Crie uma função que receba um array de inteiros e retorne o índice do maior valor

function integerArrays() {
  let bigger = 0
  for (let i = 0; i < array.length; i += 1) {
    array[bigger] < array[i] ? bigger = i : ''
  }
  return bigger
}

let array = [6, 22, 5, 4, 99, 6, 7]
integerArrays()