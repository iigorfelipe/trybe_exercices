const readline = ('readline-sync');

function calcIMC () {
  const weigth = readline.questionFloat('Qual o seu peso? (em kg)');
  const height = readline.questionFloat('Qual a sua altura? (em cm)');

  console.log(`Weigth: ${weigth}, Height: ${height}`);

  const imc = (weigth / Math.pow(height / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);
}

calcIMC();
