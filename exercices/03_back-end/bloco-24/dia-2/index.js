const express = require('express');
const { getAll } = require('./controllers/employees');

const app = express();

app.get('/employees', getAll);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;