import { isLeapYear } from '@/leap-years'

describe('Leap years should', () => {
  describe('return IS a leap year if', () => {
    [2000, 2400].forEach((year) => {
      it(`the year (${year}) is divisible by 400`, () => {
        expect(isLeapYear(year)).toBe(true)
      })
    });
    
    [2008, 2012, 2016].forEach((year) => {
      it(`the year (${year}) is divisible by 4 but not by 100`, () => {
        expect(isLeapYear(year)).toBe(true)
      })
    });
  });
  
  describe('return IS NOT a leap year if', () => {
    [1700, 1800, 1900, 2100].forEach((year) => {
      it(`the year (${year}) is divisible by 100 but not by 400`, () => {
        expect(isLeapYear(year)).toBe(false)
      })
    });
  
  
    [2017, 2018, 2019].forEach((year) => {
      it(`the year (${year}) is not divisible by 4`, () => {
        expect(isLeapYear(year)).toBe(false)
      })
    });  
  });

})
