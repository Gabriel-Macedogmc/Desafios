import { Router } from 'express';
import CashierController from '../http/CashierController';

const cashierController = new CashierController();

const cahsierRouter = Router();

cahsierRouter.post('/D2', cashierController.create);

export default cahsierRouter;
