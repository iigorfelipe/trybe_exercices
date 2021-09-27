
// const factorial = number => {
//   let result = 1;
//   for (let i = 2; i <= number; i += 1) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(4));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(4));