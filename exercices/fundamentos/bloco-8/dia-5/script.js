const specialFruit = ['morango', 'abacaxi', 'banana'];
const additionalItens = ['chocoloate', 'canudo', 'melancia'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));