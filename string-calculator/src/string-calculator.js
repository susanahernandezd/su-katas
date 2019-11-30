const DEFAULT_RESULT = 0
const SEPARATORS = ",|\n"
const MAX_NUM = 1000
const Regex = {
  SEPARATOR_STRING: /\/\/(.*)\n/,
  BETWEEN_BRAQUETS: /\[(.*?)\]/g
}

//Try to use the "domain" concepts present in the requirements
// `string` is not a concept is the type of the argument
export function stringCalculator (string) {
  // Rethink the concept of "options"
  // and try to find another way to do the `getCustomOptions`
  let options = {
    separators: SEPARATORS,
    stringNumbers: string
  }

  if (hasCustomSeparator(string)) {
    options = getCustomOptions(string)
  }

  const negatives = negativeNumbers(options)
  if (negatives) {
    throw new Error(`error: negatives not allowed: ${negatives}`)
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

function getCustomOptions (string) {
  const separatorString = string.split(Regex.SEPARATOR_STRING).filter((values) => values)
  const multipleSeparator = separatorString[0].match(Regex.BETWEEN_BRAQUETS)

  return {
    separators: multipleSeparator ? multipleSeparator.join('|') : separatorString[0],
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