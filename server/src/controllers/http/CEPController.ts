import CEPService from '../../services/CEPService';
import { Request, Response } from 'express';

export default class CEPController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { cep, cep2, cep3, cep4, cep5 } = req.body;

    const cepService = new CEPService();
    const test = [];
    const CEP = await cepService
      .retunJSON(cep, cep2, cep3, cep4, cep5)
      .then(res => res);

    console.log(CEP);

    return res.status(201).json(CEP);
  }
}
