const DEFAULT_RESULT = 0
const SEPARATORS = ",|\n"
const MAX_NUM = 1000
const Regex = {
  SEPARATOR_STRING: /\/\/(.*)\n/
}

export function stringCalculator (string) {
  let options = {
    separators: SEPARATORS,
    stringNumbers: string
  }

  if (hasCustomSeparator(string)) {
    options = getCustomSeparatorString(string)
  }

  const negatives = negativeNumbers(options)
  if (negatives) {
    return `error: negatives not allowed: ${negatives}`
  }

  return sum(options)

}

function sum ({ stringNumbers, separators }) {
  return stringNumbers.split(new RegExp(separators)).reduce((acc, string) => {
    const number = parseInt(string)
    acc = acc + (number < MAX_NUM ? number : 0)
    return acc
  }, 0) || DEFAULT_RESULT
}

function hasCustomSeparator (string) {
  return string.startsWith('//')
}

function getCustomSeparatorString (string) {
  const separatorString = string.split(Regex.SEPARATOR_STRING).filter((values) => values)

  return {
    separators: separatorString[0],
    stringNumbers: separatorString[1]
  }
}

function negativeNumbers ({ stringNumbers, separators }) {
  return stringNumbers.split(new RegExp(separators)).reduce((acc, number) => {
    if (number < 0) {
      acc += ` ${number}`
    }
    return acc.trim()
  }, '')
}