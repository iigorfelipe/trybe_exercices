const wakeUp = () => 'Acordando!!';

const drinkCoffee = () => 'Bora tomaar café!!'

const goSleep = () => 'Partiu dormir!!';

const doingThings = (func) => {
  const result = func();
  console.log(result);
};

doingThings(wakeUp);
doingThings(drinkCoffee);
doingThings(goSleep);
