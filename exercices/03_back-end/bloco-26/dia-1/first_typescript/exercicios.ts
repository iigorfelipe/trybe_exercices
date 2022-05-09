// Exercícios
// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.
// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.
// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.

enum DiasDaSemana {
  Domingo = 1,
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta,
};

enum CoresDoArcoIris {
  Red = 'Vermelha',
  Orange = 'Laranja',
  Yellow = 'Amarela',
  Green = 'Verde',
  Blue = 'Azul', 
  DarkBlue = 'AzulEscuro',
  Violet = 'Violeta',
};

enum Acoes {
  Salvar = 1,
  Imprimir,
  Abrir,
  Visualisar,
  Fechar,
};

enum PontosCardeais {
  Norte = 'N',
  Leste = 'L',
  Sul = 'S',
  Oeste = 'O',
};