import AppError from '@/errors/appError';
import fs from 'fs';
interface IVehicles {
  model: string;
  year_manufacture: number;
  doors?: number;
  brand: string;
  wheels?: number;
  passagers?: number;
}

export class Car implements IVehicles {
  model: string;
  year_manufacture: number;
  doors: number;
  brand: string;

  public car({ model, year_manufacture, doors, brand }: IVehicles) {
    const car = {
      model,
      year_manufacture,
      doors,
      brand,
    };

    if (!model) {
      throw new AppError('Carro sem Modelo', 400);
    }

    if (!doors) {
      throw new AppError(
        'Número de portas insuficiente ou além do limite',
        400,
      );
    }

    const json = JSON.stringify(car, null, 2);
    fs.writeFileSync('src/bd/cars.json', json);

    return car;
  }
}

export class Motor implements IVehicles {
  model: string;
  year_manufacture: number;
  wheels: number;
  passagers: number;
  brand: string;

  public motor({
    model,
    year_manufacture,
    wheels,
    passagers,
    brand,
  }: IVehicles) {
    const motor = { model, year_manufacture, wheels, passagers, brand };
    if (!model) {
      throw new AppError('Moto sem Modelo', 400);
    }

    if (!wheels || !passagers) {
      new AppError(
        'Moto com o numero minimo de rodas abaixo do padrão ou passageiros acima do limite',
        400,
      );
    }

    const json = JSON.stringify(motor, null, 2);
    fs.writeFileSync('src/bd/motor.json', json);

    return motor;
  }
}
