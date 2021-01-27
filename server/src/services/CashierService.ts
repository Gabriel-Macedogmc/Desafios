import AppError from '@/errors/appError';

interface IRequest {
  amount_paid: number;
  price: number;
}

export default class CashierService {
  public cashier({ amount_paid, price }: IRequest) {
    let grades_1 = 1;
    let grades_10 = 10;
    let grades_100 = 100;

    let change = amount_paid - price;
    if (amount_paid < price) {
      return new AppError('Valor insuficiente para a compra', 400);
    }
    if (amount_paid === price) {
      return (change = 0);
    }
    const rest_100 = (grades_100 = change % 100);

    grades_100 = change / 100;

    grades_10 = rest_100 / 10;

    grades_1 = change % 10;

    const result = {
      valor: amount_paid,
      troco: change,
      nota100: Math.floor(grades_100),
      nota10: Math.floor(grades_10),
      nota1: grades_1,
    };

    console.log(result);

    return result;
  }
}
