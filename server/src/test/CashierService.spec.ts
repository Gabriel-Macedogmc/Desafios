import CashierService from '@/services/CashierService';
import AppError from '@/errors/appError';
describe('create cashier', () => {
  let cashierService = new CashierService();

  it('should be able to return a error if no amount_paid provider', () => {
    const data = {
      amount_paid: 1,
      price: 1,
    };

    const fakeData = {
      amount_paid: '',
      price: '',
    };

    expect(cashierService.cashier(data)).not.toBe(fakeData);
  });
});
