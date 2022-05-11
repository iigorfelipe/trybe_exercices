import { Router } from 'express';
import { getAll, getById } from '../controllers/user';

const routes = Router();

routes.get('/', getAll);
routes.get('/:id', getById);

export default routes;
