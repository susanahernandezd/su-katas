export function stringCalculator (inputString) {
  let separators = /,|\n/
  let stringNumbers = inputString

  if(inputString.startsWith('//')) {
    const separatorString = inputString.split(/\/\/([^0-9])\n/).filter((values) => values)
    separators = separatorString[0]
    stringNumbers = separatorString[1]
  }
  const sum = stringNumbers.split(separators).reduce((acc, string) => {
    acc = acc + parseInt(string)
    return acc
  }, 0)

  return sum || 0
}