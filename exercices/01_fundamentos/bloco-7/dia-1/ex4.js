let string = "Antonio foi no banheirooooooo e não sabemos o que aconteceu"

const qualquerCoisa = phrase => {
  let word = phrase.split(' ');
  let worldão = 0;
  let result = '';

  for (let i of word) {
    if (i.length > worldão) {
      worldão = i.length;
      result = i;
    }
  }
  return result;
}
console.log(qualquerCoisa(string));
