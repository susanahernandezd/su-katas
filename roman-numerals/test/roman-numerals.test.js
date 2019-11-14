import { numberToRoman } from '@/roman-numerals'

describe('Roman Numerals should', () => {
  it('convert 1 to it\s equivalent to roman number I', () => {
    expect(numberToRoman(1)).toBe('I')
  })
  it('convert 2 to it\s equivalent to roman number II', () => {
    expect(numberToRoman(2)).toBe('II')
  })
})