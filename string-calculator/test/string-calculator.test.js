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

  it('thow an error ("negatives not allowed + negative numbers") if the string contains negatives', () => {
    expect(stringCalculator('1,-2,-3')).toBe('error: negatives not allowed: -2 -3')
  })

  it('ignore numbers bigger than 1000', () => {
    expect(stringCalculator('1001,1,2')).toBe(3)
  })

  it('allow separators of any length if surrounded by square brackets', () => {
    expect(stringCalculator('//[***]\n1***2***3')).toBe(6)
  })

  it('allow multiple single-character separators of any length if surrounded by square brackets', () => {
    expect(stringCalculator('//[*][%]\n1*2%3')).toBe(6)
  })

})
