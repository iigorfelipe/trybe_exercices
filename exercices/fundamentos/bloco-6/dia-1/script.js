let button = document.querySelector('#button');
function buttonForms(e){
  e.preventDefault();
}
button.addEventListener('click', buttonForms);

let date = document.querySelector('.date');
let valueOfDate = date.value;
for (let i = 0; i < valueOfDate.length; i += 1) {
  if (valueOfDate[i] == '') {
    alert('Valor inválido, digite apenas números!')
  }
}

function createOptions(){
  let state = document.querySelector('.state');
  let states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let i = 0; i < states.length; i += 1) {
    let option = document.createElement('option');
    state.appendChild(option).innerText = states[i];
    state.appendChild(option).value = states[i];
  }
}