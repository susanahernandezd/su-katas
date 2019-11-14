import { numberToRoman } from '@/roman-numerals'

describe('Roman Numerals should', () => {
  [
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV']
  ].forEach(([number, roman]) => {
    it(`convert ${number} to it\s equivalent to roman number ${roman}`, () => {
      expect(numberToRoman(number)).toBe(roman)
    })
  })
})
