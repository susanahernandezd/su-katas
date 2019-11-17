export function toRoman(number) {
  let output = ''

  if(number === 4) {
    return 'IV'
  }

  if(number >= 5) {
    output += 'V'
    number -= 5
  }

  for (let i = 0; i < number; i++) {
    output += 'I'
  }

  return output
}