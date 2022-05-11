import express from 'express';
import routes from './sala10/routes/users';

const app = express();

app.listen(3000, () => console.log('Ouvindo na porta 3000'));

app.use('/users', routes);
