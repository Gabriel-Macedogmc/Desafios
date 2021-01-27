import { Router } from 'express';
import VehiclesController from '../http/VehiclesController';

const vehiclesController = new VehiclesController();

const vehiclesRouter = Router();

vehiclesRouter.post('/D3/car', vehiclesController.createCar);
vehiclesRouter.post('/D3/motor', vehiclesController.createMotor);

export default vehiclesRouter;
