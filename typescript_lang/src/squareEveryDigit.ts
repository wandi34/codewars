export class squareEveryDigit {
  static squareDigits(num: number): number {
    const digits: String[] = (""+ num).split("")
    return +(digits.map(x => "" + (+x * +x)).reduce((a,b) => a.concat(b)))
  }
}