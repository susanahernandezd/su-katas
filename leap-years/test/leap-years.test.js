import { isLeapYear } from '@/leap-years'

describe('Leap years should', () => {
  [2000, 2400].forEach((year) => {
    it(`return true if the year (${year}) is divisible by 400`, () => {
      expect(isLeapYear(year)).toBe(true)
    })
  })
  
})
