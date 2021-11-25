import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  // acessar os elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');

  // fazer os testes
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verificando se existe dois botões', () => {
  // acessar os elementos da tela
  render(<App />);
  const buttons = screen.getAllByRole('button');

  // fazer os testes
  expect(buttons).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  // acessar os elementos da tela
  render(<App />);
  const btnSend = screen.getByTestId('id-send');

  // fazer os testes
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
});

// 1 - acessar os elementos da tela

// 2 - interager com os elementos (se for necessário)

// 3 - fazer os testes


// códigos para usar no screen:
// .getByLabelText("string"): procura pela label
// .getByRole("funcão"): procura pela função
// .getAllByRole("funcão"): procura por todas as funções do mesmo tipo
// .getByTestId("id-test"): procura pelo nome do data-test

// códigos para usar no expect:
// .toBeInTheDocument(): verifica se ta presente
// .toHaveLength(2): verifica se o tamanho é 2
// .toHaveValue("string"): verifica o value

