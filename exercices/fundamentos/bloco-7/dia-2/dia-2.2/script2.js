const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1)
const addTurno = (l, j, ll) => {
  l[j] = ll;
}
addTurno(lesson2, 'turno', 'noite');

// 2)
const allKeys = obj => Object.keys(obj);
// console.log(allKeys(lesson1));

// 3)
const objLength = ulala => Object.keys.length;
// console.log(objLength(lesson3));

// 4)
const allValues = iraaa => Object.values(iraaa);
// console.log(allValues(lesson3));

// 5)
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

// 6)
const students1 = allLessons.lesson1.numeroEstudantes;
const students2 = allLessons.lesson2.numeroEstudantes;
const students3 = allLessons.lesson3.numeroEstudantes;
const returnTotal = allLessons => students1 + students2 + students3;
// console.log(returnTotal(allLessons));

// 7)
const returnKey = bololoHAHA => Object.values(bololoHAHA)[1];
// console.log(returnKey(lesson1));

// 8)
const checkPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(checkPair(lesson1, 'professor', 'Maria Clara'));