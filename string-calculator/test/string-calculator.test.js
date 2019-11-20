import { stringCalculator } from '@/string-calculator'

describe('String Calculator should', () => {
  it(`sum 0 when it doesn\t receive anything`, () => {
    expect(stringCalculator('')).toBe(0)
  })

  describe('sum the string numbers', () => {
    [
      ['4', 4],
      ['1,2', 3],
      ['1,2,3,4,5,6,7,8,9', 45],
      ['1\n2,3', 6]
    ].forEach(([string, resultSum]) => {
      it(`(${string}) returning ${resultSum}`, () => {
        expect(stringCalculator(string)).toBe(resultSum)
      })
    });

    [
      ['//;\n1;2', 3],
      ['//-\n1-2-3', 6]
    ].forEach(([string, resultSum]) => {
      it(`(${string}) returning ${resultSum}, allowing custom separators`, () => {
        expect(stringCalculator(string)).toBe(resultSum)
      })
    })
  })

})
