import React from 'react';
import App from '.App.js';

describe('Página principal', () => {
  test('Tesa que o botão de adicionar doguinho está presente', async () => {
    const { queryByText } = render(<App />)
  });
});
