// Agora inverta o lado do triângulo.

let n = 5
let symbol = '*'
let line = ''
let position = n

for(let i = 0; i < n; i += 1){
  for(let column = 0; column < n; column += 1){
    if(column < position){
      line += ' '
    } else {
      line += symbol
    }
  }
}