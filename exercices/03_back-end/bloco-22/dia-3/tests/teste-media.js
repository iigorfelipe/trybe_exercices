const { expect } = require('chai');

const calculaMedia = require('../media');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaMedia(4);

    expect(resposta).to.be.equals('reprovado');
  });
});