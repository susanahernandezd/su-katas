import { numberToRoman } from '@/roman-numerals'

describe('Roman Numerals should', () => {
  [
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX'],
    [10, 'X'],
    [11, 'XI'],
    [14, 'XIV']
  ].forEach(([number, roman]) => {
    it(`convert ${number} to it\s equivalent to roman number ${roman}`, () => {
      expect(numberToRoman(number)).toBe(roman)
    })
  })
})
