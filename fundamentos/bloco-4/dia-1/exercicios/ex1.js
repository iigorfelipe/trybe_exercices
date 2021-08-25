/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

const a = 2;
const b = 5;

let operador = ""

switch (operador) {
  case "+":
    console.log(a+b)
    break

  case "-":
    console.log(a-b)
    break

  case "*":
    console.log(a*b)
    break

  case "/":
    console.log(a/b)
    break

  case "%":
    console.log(a%b)
    break

    default:
      console.log("operador inválido")
}