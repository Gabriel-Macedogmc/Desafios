import { Router } from 'express';
import CEPController from '../http/CEPController';

const cepController = new CEPController();

const cepRouter = Router();

cepRouter.post('/D4', cepController.create);

export default cepRouter;
