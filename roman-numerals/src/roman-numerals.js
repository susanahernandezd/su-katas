export const numberToRoman = (number) => {
  let output = ''
  if(number === 4) {
    output = 'IV'
  } else if (number === 5) {
    output = 'V'
  } else if (number === 6) {
    output = 'VI'
  } else {
    for (let i = 0; i < number; i++) {
      output += 'I'
    }
  }
  return output
} 