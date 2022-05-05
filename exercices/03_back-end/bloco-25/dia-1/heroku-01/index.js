const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Vamo que vamo Trybe')
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`)
});