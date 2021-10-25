const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age > 18))
);

// console.log(verifyAgeDrive(objPeople));
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

const verifyAge = (people) => (
  people.filter((age) => (age.age %2 !== 0))
);
console.log(verifyAge(objPeople));