export const numberToRoman = (number) => {
  let output = ''
  if(number === 4) {
    output = 'IV'
  } else if (number === 9) {
    output = 'IX'
  } else if (number === 10) {
    output = 'X'
  } else if( number >= 5 ) {
    output += 'V'

    for (let i = 5; i < number; i++) {
      output += 'I'
    }
  } else {
    for (let i = 0; i < number; i++) {
      output += 'I'
    }
  }
  return output
} 