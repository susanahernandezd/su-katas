export function toRoman(number) {
  let output = ''

  while(number >= 10) {
    output += 'X'
    number -= 10
  }

  while(number === 9) {
    output += 'IX'
    number -= 9
  }

  while(number >= 5) {
    output += 'V'
    number -= 5
  }

  while(number >= 4) {
    output += 'IV'
    number -= 4
  }

  while(number > 0) {
    output += 'I'
    number -= 1
  }

  return output
}