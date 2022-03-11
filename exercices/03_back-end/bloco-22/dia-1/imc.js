const WEIGHT = 790;
const HEIGHT = 915

function calcIMC () {
  const weigth = WEIGHT;
  const height = HEIGHT;

  console.log(`Weigth: ${weigth}, Height: ${height}`);

  const imc = (weigth / Math.pow(height / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);
}

calcIMC();
