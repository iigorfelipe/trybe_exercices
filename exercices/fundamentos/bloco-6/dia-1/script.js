function checkName() {
  let name = document.querySelector('[name = name]');
  if (name.value.length === 0) {
  alert('Nome inválido!');
  }
}

function checkEmail() {
  let name = document.querySelector('[name = email]');
  if (name.value.length < 8) {
  alert('Email inválido!');
  }
}

function checkCPF() {
  let name = document.querySelector('[name = cpf]');
  if (name.value.length !== 11) {
  alert('CPF inválido!');
  }
}

function checkAddress() {
  let name = document.querySelector('[name = address]');
  if (name.value.length < 5) {
  alert('Endereço inválido!');
  }
}

function checkCity() {
  let name = document.querySelector('[name = city]');
  if (name.value.length < 1) {
  alert('Cidade inválida!');
  }
}

function checkState() {
  let name = document.querySelector('[name = state]');
  if (name.value === 0) {
  alert('Estado inválido!');
  }
}

function checkRole() {
  let name = document.querySelector('[name = role]');
  if (name.value.length === 0) {
  alert('Cargo inválido!');
  }
}

function checkRoleDescrition() {
  let name = document.querySelector('[name = roleDescrition]');
  if (name.value.length < 12) {
  alert('Descrição do cargo inválido!');
  }
}

function checkDate() {
  let name = document.querySelector('[name = date]');
  if (name.value === 0) {
    alert('Data inválida!');
  }
}


function checkSubmit(e) {
  e.preventDefault();
  checkName();
  checkEmail();
  checkCPF();
  checkAddress();
  checkCity();
  checkState();
  checkRole();
  checkRoleDescrition();
  checkDate();
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