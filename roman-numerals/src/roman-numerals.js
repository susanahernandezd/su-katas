export const numberToRoman = (number) => {
  let output = ''
  for (let i = 0; i < number; i++) {
    output += 'I'
  }
  return output
} 