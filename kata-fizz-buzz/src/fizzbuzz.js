const Rules = {
  THREE: {
    multiplier: 3,
    result: 'Fizz'
  },
  FIVE: {
    multiplier: 5,
    result: 'Buzz'
  }
}

export const fizzbuzz = (number) => {
  let output = ''

  Object.keys(Rules).forEach((rule) => {
    if ( isMultipleOf(number, Rules[rule].multiplier ) ){
      output += Rules[rule].result
    }
  })

  return output ? output : number.toString()
}

const isMultipleOf = (number, multiple) => number % multiple === 0