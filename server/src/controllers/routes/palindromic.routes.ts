import { Router } from 'express';
import PalindromicController from '../http/PalindromicController';

const palindromicController = new PalindromicController();

const palindromicRouter = Router();

palindromicRouter.post('/D1', palindromicController.create);

export default palindromicRouter;
