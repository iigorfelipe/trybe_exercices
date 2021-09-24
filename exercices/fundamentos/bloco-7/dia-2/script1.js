let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function returnPar(array) {
  let array2 = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] %2 == 0) {
      array2.push(array[i]);
      
    }
  }
  return array2;
}

console.log(returnPar(array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
