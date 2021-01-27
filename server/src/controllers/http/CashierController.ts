import AppError from '../../errors/appError';
import { Request, Response } from 'express';

export default class PalindromicController {
  public create(req: Request, res: Response): Response {
    const { amount_paid, price } = req.body;

    let grades_1 = 1;
    let grades_10 = 10;
    let grades_100 = 100;

    if (amount_paid < price) {
      return res.json(new AppError('Valor insuficiente para a compra', 400));
    }
    if (amount_paid === price) {
      return res.json({
        troco: 0,
      });
    }
    let change = amount_paid - price;
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

    return res.json(result);
  }
}
