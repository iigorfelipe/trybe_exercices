const express = require('express');
const { getAll, getById } = require('./controllers/employees');

const app = express();

app.get('/employees', getAll);
app.get('/employees/:id', getById);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;