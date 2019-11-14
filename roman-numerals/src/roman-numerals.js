export const numberToRoman = (number) => {
  let output = ''
  if(number === 4) {
    return 'IV'
  } else if (number === 9) {
    return 'IX'
  } else if( number >= 10 ) {
    output += 'X'
    number = number - 10
  } else if( number >= 5 ) {
    output += 'V'
    number = number - 5
  }

  for (let i = 0; i < number; i++) {
    output += 'I'
  }
  return output
} 