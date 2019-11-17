export function toRoman(number) {
  let output = ''

  if(number >= 10) {
    output += 'X'
    number -= 10
  }

  if(number === 9) {
    output += 'IX'
    number -= 9
  }

  if(number >= 5) {
    output += 'V'
    number -= 5
  }

  if(number >= 4) {
    output += 'IV'
    number -= 4
  }

  for (let i = 0; i < number; i++) {
    output += 'I'
  }

  return output
}