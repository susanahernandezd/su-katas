export const numberToRoman = (number) => {
  let output = ''
  if(number === 4) {
    output = 'IV'
  } else {
    for (let i = 0; i < number; i++) {
      output += 'I'
    }
  }
  return output
} 