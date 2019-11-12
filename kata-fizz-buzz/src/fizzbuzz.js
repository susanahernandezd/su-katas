const Multiples = {
  THREE: {
    numbers: 3,
    result: 'Fizz'
  },
  FIVE: {
    numbers: 5,
    result: 'Buzz'
  }
}

export const fizzbuzz = (number) => {
  let result = ''

  Object.keys(Multiples).forEach((multiple) => {
    if ( isMultipleOfANumber(number, Multiples[multiple].numbers ) ){
      result += Multiples[multiple].result
    }
  })

  return result ? result : number
}

const isMultipleOfANumber = (number, multiple) => number % multiple === 0