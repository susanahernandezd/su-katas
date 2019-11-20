import { stringCalculator } from '@/string-calculator'

describe('String Calculator should', () => {
  it(`sum 0 when it doesn\t receive anything`, () => {
    expect(stringCalculator("")).toBe(0)
  })

  it('sum the string number', () => {
    expect(stringCalculator("4")).toBe(4)
  })
})
