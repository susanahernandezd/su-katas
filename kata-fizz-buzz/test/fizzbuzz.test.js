import { fizzbuzz } from '@/fizzbuzz'

describe('Fizz Buzz should', () => {

  it('prints the recived number', () => {
    expect(fizzbuzz(1)).toBe(1)
  });

  [3, 6, 9].forEach((number) => {
    it(`prints "Fizz" if ${number} is a multiple of 3`, () => {
      expect(fizzbuzz(number)).toBe('Fizz')
    })
  });

  [5, 10, 20].forEach((number) => {
    it(`prints "Buzz" if ${number} is a multiple of 5`, () => {
      expect(fizzbuzz(number)).toBe('Buzz')
    })
  });
  
  it('prints "FizzBuzz" if the recived number is both multiple of 3 & 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
  })
  
})
