interface IRequest {
  min: number;
  max: number;
}

export default class PalindromicService {
  isPalindromic(num: number): number | undefined {
    const reverse = parseInt(num.toString().split('').reverse().join(''));

    if (reverse === num) {
      return num;
    }
  }

  private palindromicNumbers: Array<number> = [];

  checkPalindromic({ min, max }: IRequest): number[] | undefined {
    for (min = 0; min <= max; min += 1) {
      const compare = this.isPalindromic(min);
      if (compare) {
        const revert = [compare];
        return revert;
      }
    }
  }
}
