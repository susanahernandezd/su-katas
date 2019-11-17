const RomanLibrary = [
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

export function toRoman(number) {
  let output = ''

  RomanLibrary.forEach(([value, roman]) => {
    while(number >= value) {
      output += roman
      number -= value
    }
  })

  return output
}