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

  public checkPalindromic({ min, max }: IRequest) {
    for (min = 0; min <= max; min += 1) {
      const compare = this.isPalindromic(min);
      if (compare) {
        const revert = [compare];
        console.log(revert);
        return revert.map(element => element);
      }
    }
  }
}
