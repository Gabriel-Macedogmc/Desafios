import AppError from '@/errors/appError';
import PalindromicService from '@/services/PalindromicService';

describe('check is palindromics', () => {
  let palindromicService = new PalindromicService();

  it('it should be possible to return an error if there are no number', () => {
    const num = 0;
    const numberPalindromic = 999;
    const test = parseInt(
      numberPalindromic.toString().split('').reverse().join(''),
    );
    expect(palindromicService.isPalindromic(num)).not.toBe(test);
  });
});
