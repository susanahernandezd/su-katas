const RomanLibrary = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
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