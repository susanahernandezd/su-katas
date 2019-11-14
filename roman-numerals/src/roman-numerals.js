export const numberToRoman = (number) => {
  let output = ''

  if(number === 4) {
    return 'IV'
  } 

  if (number === 9) {
    return 'IX'
  }

  if( number >= 10 ) {
    output += 'X'
    number = number - 10
  }

  if( number >= 5 ) {
    output += 'V'
    number = number - 5
  }

  for (let i = 0; i < number; i++) {
    output += 'I'
  }

  return output
} 