import { isLeapYear } from '@/leap-years'

describe('Leap years should', () => {
  [2000, 2400].forEach((year) => {
    it(`return true if the year (${year}) is divisible by 400`, () => {
      expect(isLeapYear(year)).toBe(true)
    })
  });

  [1700, 1800, 1900, 2100].forEach((year) => {
    it(`return false if the year (${year}) is divisible by 100 but not by 400`, () => {
      expect(isLeapYear(year)).toBe(false)
    })
  });

  [2008, 2012, 2016].forEach((year) => {
    it(`return true if the year (${year}) is divisible by 4 but not by 100`, () => {
      expect(isLeapYear(year)).toBe(true)
    })
  });
  
})
