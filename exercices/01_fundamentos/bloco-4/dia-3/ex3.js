// Agora inverta o lado do triângulo.

let n = 5
let line = ''
let space = n

for (let i = 0; i < n; i += 1) {
  for (let y = 0; y <= n; y += 1) {
    y < space ? line += ' ' : line += "*"
  }
  console.log(line)
  line = ''
  space -= 1
}