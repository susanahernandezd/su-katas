import { toRoman } from '@/roman-numerals'

describe('Roman Numerals should', () => {
  [
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [9, 'IX'],
    [10, 'X'],
    [11, 'XI'],
    [14, 'XIV'],
    [15, 'XV'],
    [17, 'XVII'],
    [19, 'XIX'],
    [20, 'XX'],
    [24, 'XXIV'],
    [25, 'XXV'],
    [29, 'XXIX'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M'],
  ]  .forEach(([number, romanNumber]) => {
    it(`converts ${number} to it's roman representation ${romanNumber}`, () => {
      expect(toRoman(number)).toBe(romanNumber)
    })
  }) 
})
