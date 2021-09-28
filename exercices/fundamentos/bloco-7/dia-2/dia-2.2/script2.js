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

const addTurno = (l, j, ll) => {
  l[j] = ll;
}
 
addTurno(lesson2, 'turno', 'noite');

const allKeys = obj => Object.keys(obj);
console.log(allKeys(lesson1));

const objLength = ulala => Object.keys.length;
console.log(objLength(lesson3));

const allValues = iraaa => Object.values(iraaa);
console.log(allValues(lesson3));
