import AppError from '@/errors/appError';
import { Car, Motor } from '@/services/VehiclesService';

describe('create car and Motor', () => {
  let car = new Car();
  let motor = new Motor();

  it('should be anle to return a sucessuful if  model provider', () => {
    const data = {
      model: 'same_model',
      year_manufacture: 2001,
      doors: 1,
      brand: 'same_brand',
    };
    expect(car.car(data)).toEqual(data);
  });

  it('it should be possible to return an error if no ports greater than 2', () => {
    const data = {
      model: 'same_model',
      year_manufacture: 2001,
      doors: 3,
      brand: 'same_brand',
    };

    expect(car.car(data)).toEqual(data);
  });

  it('should be anle to return a sucessuful if  model provider', () => {
    const data = {
      model: 'same_model',
      year_manufacture: 2001,
      wheels: 2,
      passagers: 2,
      brand: 'same_brand',
    };

    expect(motor.motor(data)).toEqual(data);
  });
});
