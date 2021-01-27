interface IVehicles {
  model: string;
  year_manufacture: string;
  doors?: string;
  brand: string;
  wheels?: string;
  passagers?: string;
}

export class Car implements IVehicles {
  model: string;
  year_manufacture: string;
  doors: string;
  brand: string;

  constructor(
    model: string,
    year_manufacture: string,
    doors: string,
    brand: string,
  ) {
    this.model = model;
    this.brand = brand;
    this.year_manufacture = year_manufacture;
    this.doors = doors;
  }
}

export class Motor implements IVehicles {
  model: string;
  year_manufacture: string;
  wheels: string;
  passagers: string;
  brand: string;

  constructor(
    model: string,
    year_manufacture: string,
    wheels: string,
    passagers: string,
    brand: string,
  ) {
    this.model = model;
    this.year_manufacture = year_manufacture;
    this.wheels = wheels;
    this.passagers = passagers;
    this.brand = brand;
  }
}
