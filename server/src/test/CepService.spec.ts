import AppError from '@/errors/appError';
import CEPService from '@/services/CEPService';

describe('search cep', () => {
  it('should ne able to return a error if cep typeof number', async () => {
    let cepService = new CEPService();

    const cep = '07243240';
    const cep2 = '07243170';
    const cep3 = '12517520';
    const cep4 = '123456789';
    const cep5 = '13054205';

    const fakeCep = 123456;

    expect(
      await cepService.retunJSON(cep, cep2, cep3, cep4, cep5).then(res => res),
    ).not.toBe(fakeCep);
  });
});
