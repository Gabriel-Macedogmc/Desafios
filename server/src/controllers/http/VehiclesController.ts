import AppError from '@/errors/appError';
import { Car, Motor } from '@/services/VehiclesService';
import { Request, Response } from 'express';
import fs from 'fs';

export default class VehiclesController {
  public createCar(req: Request, res: Response): Response {
    const { model, year_manufacture, doors, brand } = req.body;

    const car = new Car(model, year_manufacture, doors, brand);

    if (doors < 2 || doors > 4) {
      return res.json(
        new AppError('Número de portas insuficiente ou além do limite', 400),
      );
    }

    const json = JSON.stringify(car, null, 2);
    fs.writeFileSync('src/bd/cars.json', json);

    return res.status(201).json(car);
  }
  public createMotor(req: Request, res: Response): Response {
    const { model, passagers, brand, year_manufacture, wheels } = req.body;

    const motor = new Motor(model, passagers, brand, year_manufacture, wheels);

    const dataMoto = [motor];

    if (wheels < 2 || wheels > 2 || passagers > 2) {
      return res.json(
        new AppError(
          'Moto com o numero minimo de rodas abaixo do padrão ou passageiros acima do limite',
          400,
        ),
      );
    }

    const json = JSON.stringify(dataMoto, null, 2);
    fs.writeFileSync('src/bd/motor.json', json);

    return res.json({
      motor,
    });
  }
}
