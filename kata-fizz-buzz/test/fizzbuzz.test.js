import { fizzbuzz } from '@/fizzbuzz'

describe('Fizz Buzz should', () => {

  [1, 2, 4].forEach((number) => {
    it('prints the recived number', () => {
      expect(fizzbuzz(number)).toBe(number.toString())
    });
  });

  [3, 6, 9].forEach((number) => {
    it(`prints "Fizz" if the number (${number}) is multiple of 3`, () => {
      expect(fizzbuzz(number)).toBe('Fizz')
    })
  });

  [5, 10, 20].forEach((number) => {
    it(`prints "Buzz" if the number (${number}) is multiple of 5`, () => {
      expect(fizzbuzz(number)).toBe('Buzz')
    })
  });
  
  [15, 30, 60].forEach((number) => {
    it(`return FizzBuzz if the number (${number}) is multiple of 3 and 5`, () => {
      expect(fizzbuzz(number)).toBe("FizzBuzz")
    });
  });
  
})
