import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

// 1 - acessar os elementos da tela

// 2 - interager com os elementos (se for necessário)

// 3 - fazer os testes

describe("Tela de inserção de email", () => {
  it('Verificando se existe o campo Email.', () => {
    // acessar os elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
  
    // fazer os testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  
  it('Verificando se existe dois botões', () => {
    // acessar os elementos da tela
    render(<App />);
    const buttons = screen.getAllByRole('button');
  
    // fazer os testes
    expect(buttons).toHaveLength(2);
  });
  
  it('Verificando se existe um botão de enviar', () => {
    // acessar os elementos da tela
    render(<App />);
    const btnSend = screen.getByTestId('id-send');
  
    // fazer os testes
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button');
    expect(btnSend).toHaveValue('Enviar');
  });
  
  it('Verificando se o botão e o campo email estão funcionando.', () => {
      // acessar os elementos da tela
    render(<App />);
    const EMAIL_USER = 'email@email.com';
    const textEmail = screen.getByTestId('id-email-user');
  
    // fazer os testes
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
  
    // interager com os elementos (se for necessário)
    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);
  
    // fazer os testes
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
  });
});

// códigos para usar no screen:
// .getByLabelText("string"): procura pela label
// .getByRole(TAG): procura pela TAG
// .getAllByRole(TAG): procura por todas as TAGs do mesmo tipo
// .getByTestId("id-test"): procura pelo nome do data-test

// códigos para usar no expect:
// .toBeInTheDocument(): verifica se ta presente
// .toHaveLength(2): verifica se o tamanho é 2
// .toHaveValue("string"): verifica o value

