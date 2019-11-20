export function stringCalculator (string) {
  let separators = /,|\n/
  let stringNumbers = string

  if (string.startsWith('//')) {
    const separatorString = string.split(/\/\/([^0-9])\n/).filter((values) => values)
    separators = separatorString[0]
    stringNumbers = separatorString[1]
  }

  const negatives = stringNumbers.split(separators).reduce((acc, number) => {
    if ( number < 0) {
      acc += ` ${number}`
    }
    return acc.trim()
  }, '')

  if (negatives) {
    return `error: negatives not allowed: ${negatives}`
  }

  const sum = stringNumbers.split(separators).reduce((acc, number) => {
    acc = acc + parseInt(number)
    return acc
  }, 0)

  return sum || 0
}