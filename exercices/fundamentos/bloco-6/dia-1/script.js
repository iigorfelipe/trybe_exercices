function checkSubmit(e) {
  e.preventDefault();
  // se nenhum capo foi preenchido então mostrar um alert para preencher
  // se não, executar as funções:
  checkName();
  checkEmail();
  checkCPF();
}

function checkName() {
  let name = document.querySelector('[name = name]');
  if (name.value.length === 0) {
  alert('Nome inválido!')
  }
}

function checkEmail() {
  let name = document.querySelector('[name = email]');
  if (name.value.length < 8) {
  alert('Email inválido!')
  }
}

function checkCPF() {
  let name = document.querySelector('[name = cpf]');
  if (name.value.length < 11) {
  alert('CPF inválido!')
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

window.onload = function () {
  
  let button = document.querySelector('#button');
  button.addEventListener('click', checkSubmit);

  createOptions();
}