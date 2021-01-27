import PalindromicService from '../../services/PalindromicService';
import { Request, Response } from 'express';

export default class PalindromicController {
  public create(req: Request, res: Response): Response {
    const { min, max } = req.body;

    const palindromicService = new PalindromicService();
    const palindromic = palindromicService.checkPalindromic({ min, max });

    console.log(palindromic);
    return res.status(201).json(palindromic);
  }
}
