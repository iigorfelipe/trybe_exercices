// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. //

const ang1 = 100
const ang2 = 50
const ang3 = 30

total = ang1 + ang2 + ang3

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
  console.log("Valor inválido")
} else {
  total == 180 ? console.log(true) : console.log(false)
}