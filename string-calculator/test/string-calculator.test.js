import { stringCalculator } from '@/string-calculator'

describe('String Calculator should', () => {
  it(`sum 0 when it doesn\t receive anything`, () => {
    expect(stringCalculator("")).toBe(0)
  });

  [
    ['4', 4],
    ['1,2', 3],
    ['1,2,3,4,5,6,7,8,9', 45]
  ].forEach(([string, resultSum]) => {
    it(`sum the string numbers (${string}) returning ${resultSum}`, () => {
      expect(stringCalculator(string)).toBe(resultSum)
    })
  })
})
