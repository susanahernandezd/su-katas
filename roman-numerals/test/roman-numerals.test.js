import { toRoman } from '@/roman-numerals'

describe('Roman Numerals should', () => {
  [
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [8, 'VIII'],
  ]  .forEach(([number, romanNumber]) => {
    it(`converts ${number} to it's roman representation ${romanNumber}`, () => {
      expect(toRoman(number)).toBe(romanNumber)
    })
  }) 
})
