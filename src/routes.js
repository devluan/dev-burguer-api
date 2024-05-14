import { Router } from 'express';

const routes = new Router();

routes.get('/', (require, response) => {
  return response.status(200).json({ messege: 'Hello World!' });
});

export default routes;
