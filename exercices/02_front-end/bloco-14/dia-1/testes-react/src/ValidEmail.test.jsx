import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

// Agora, para você começar a fixar o assunto, adicione novas funcionalidades a esse componente e faça o teste:
// Não exibir a mensagem caso o email ainda não tenha sido enviado.
// Mude a cor do texto caso o email seja válido ou inválido.
// Dicas: Você pode usar o .not para negar o expect ( .not.toBeInTheDocument() ) no seu teste e também usar a propriedade styles no seu componente para trocar a cor