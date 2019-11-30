const DEFAULT_RESULT = 0
const SEPARATORS = ",|\n"
const MAX_NUM = 1000
const Regex = {
  SEPARATOR_STRING: /\/\/(.*)\n/,
  BETWEEN_BRAQUETS: /\[(.*?)\]/g
}

export function stringCalculator (numbers) {
  // Rethink the concept of "options"
  // and try to find another way to do the `getCustomOptions`
  let options = {
    separators: SEPARATORS,
    numbers
  }

  if (hasCustomSeparator(numbers)) {
    options = getOptions(numbers)
  }

  const negatives = negativeNumbers(options)
  if (negatives) {
    throw new Error(`error: negatives not allowed: ${negatives}`)
  }

  return sum(options)

}

function sum ({ numbers, separators }) {
  return numbers.split(new RegExp(separators)).reduce((acc, string) => {
    const number = parseInt(string)
    acc = acc + (number < MAX_NUM ? number : 0)
    return acc
  }, 0) || DEFAULT_RESULT
}

function hasCustomSeparator (string) {
  return string.startsWith('//')
}

function getOptions (string) {
  const separatorString = string.split(Regex.SEPARATOR_STRING).filter((values) => values)
  const multipleSeparator = separatorString[0].match(Regex.BETWEEN_BRAQUETS)

  return {
    separators: multipleSeparator ? multipleSeparator.join('|') : separatorString[0],
    numbers: separatorString[1]
  }
}

function negativeNumbers ({ numbers, separators }) {
  return numbers.split(new RegExp(separators)).reduce((acc, number) => {
    if (number < 0) {
      acc += ` ${number}`
    }
    return acc.trim()
  }, '')
}