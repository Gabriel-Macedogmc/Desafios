import AppError from '../../errors/appError';
import { Request, Response } from 'express';
import CashierService from '@/services/CashierService';
export default class PalindromicController {
  public create(req: Request, res: Response): Response {
    const { amount_paid, price } = req.body;
    const cashier = new CashierService();
    const result = cashier.cashier({ amount_paid, price });

    return res.json(result);
  }
}
