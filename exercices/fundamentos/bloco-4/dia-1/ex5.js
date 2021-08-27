/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) */

const peao = "Uma casa a frente"
const torre = "Todas casas a frente, costas e lados"
const cavalo = "Para ao lado da 3 casa percorrida"
const bispo = "Diagonais"
const rei = "Uma casa para qualquer direção"
const dama = "Com exceção do cavalo ela possui todos os outros movimentos"

peca = Dama

switch (peca) {
    case peao:
      console.log("Uma casa a frente")
      break
  
    case torre:
      console.log("Todas casas na sua frente, costas e lado")
      break
  
    case cavalo:
      console.log("Para ao lado da 3 casa percorrida")
      break
  
    case bispo:
      console.log("Diagonais")
      break
  
    case rei:
        console.log("Uma casa para qualquer direção")
        break

    case dama:
      console.log("Com exceção do cavalo ela possui todos os outros movimentos")
      break
  
      default:
        console.log("Peça inválida")
  }