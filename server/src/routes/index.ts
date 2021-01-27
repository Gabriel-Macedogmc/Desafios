import palindromicRouter from '@/controllers/routes/palindromic.routes';
import cahsierRouter from '@/controllers/routes/cashier.routes';
import vehiclesRouter from '@/controllers/routes/vehicles.routes';
import cepRouter from '@/controllers/routes/cep.routes';
import { Router } from 'express';
const routes = Router();

routes.get('/', (req, res) => {
  res.send('hello world');
});

routes.use('/', palindromicRouter);
routes.use('/', cahsierRouter);
routes.use('/', vehiclesRouter);
routes.use('/cep', cepRouter);
export default routes;
