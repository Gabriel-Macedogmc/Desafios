import AppError from '@/errors/appError';
import { Car, Motor } from '@/services/VehiclesService';
import { Request, Response } from 'express';
import fs from 'fs';

export default class VehiclesController {
  public createCar(req: Request, res: Response): Response {
    const { model, year_manufacture, doors, brand } = req.body;

    const car = new Car();
    const result = car.car({ model, year_manufacture, doors, brand });

    return res.status(201).json(result);
  }
  public createMotor(req: Request, res: Response): Response {
    const { model, year_manufacture, wheels, passagers, brand } = req.body;

    const motor = new Motor();
    const result = motor.motor({
      model,
      year_manufacture,
      wheels,
      passagers,
      brand,
    });

    return res.json(result);
  }
}
